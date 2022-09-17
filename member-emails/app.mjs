import { map_csv_to_forwards } from './modules/csv.mjs'
import { register_forward_with_improvmx } from './modules/improvmx_api.mjs'
import { throttle_and_retry, log, verbose, development, trial_run } from './modules/helpers.mjs'
import { get_member_export_csv } from './modules/unaty.mjs'

/* ///////////////////////////////
// Load Unaty emails and set them
// to ImprovMX
// /////////////////////////////*/
const error_logs = []

try {

    // Load the new csv
    const temp_csv_path = `.latest.members.csv`
    await get_member_export_csv( temp_csv_path ).catch( e => {
        if( !development ) throw e
        log( `Failed to get latest csv, running with past one.` )
    } )

    let todos = await map_csv_to_forwards( temp_csv_path )
    if( trial_run ) {
        todos = [ todos[0] ]
        log( `[ ${ new Date().toLocaleTimeString() } ] Only running one forward: `, todos )
    }

    const forward_creation_queue = todos.map( ( { email, handle }, i ) => () => register_forward_with_improvmx( handle, email,error_logs, `entry ${ i } of ${ todos.length }`, verbose ) )

    log( `Starting throttled execution of ${ forward_creation_queue.length } entries` )

	await throttle_and_retry( forward_creation_queue, 1, `forward_create`, 5, 60 )
    log( `✅ Forward creations complete` )

} catch( e ) {
    log( `🛑 Error ocurred:`, e )
    log( `Logs: `, error_logs )
}