import fetch from 'isomorphic-fetch'
import { promises as fs } from 'fs'
import { log } from './helpers.mjs'
import 'dotenv/config'
const { unaty_bearer_token, local } = process.env

export async function get_member_export_csv( save_path ) {

    // Get csv link of new export 
    const url = `https://us-central1-unaty-prod.cloudfunctions.net/api/v1/members/create-export`
    const options = {
        method: 'POST',
        headers: {
			Authorization: `Bearer ${ unaty_bearer_token }`,
        }
    }

    log( `Calling ${ url } with `, options )
    const { data, ...response } = await fetch( url, options ).then( res => {
        log( `Request status code: ${ res.status }` )
        return res.json()
    } )
    if( !data?.url ) {
        if( local ) log( `Error getting url, response data: `, data, response )
        throw new Error( `Error fetching new csv` )
    }

    // Load remote csv
    if( local ) log( `Fetching new CSV at ${ data.url }` )
    const csv = await fetch( data.url ).then( res => res.text() )

    // Write csv to file
    log( `Writing new csv to ${ save_path }` )
    await fs.writeFile( save_path, csv, 'utf8' )

}