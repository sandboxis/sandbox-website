import { promises as fs } from 'fs'
import Papa from 'papaparse'


export const readCsv = async path => {

	const [ csv, err ] = await fs.readFile( path, 'utf8' ).then( d => [ d, null ] ).catch( e => [ null, e ] )
	if( err ) throw err

	const { data: json } = Papa.parse( csv, { header: true } )

	return json

}



export const writeCsv = async ( path, data ) => {

	const csv = Papa.unparse( data )
	await fs.writeFile( path, csv )

}

export async function map_csv_to_forwards( csv_path ) {

	const members = await readCsv( csv_path )
	console.log( `${ members.length } members loaded from ${ csv_path }` )
	const has_handle_and_email = members.filter( member => !!member[ 'Account Email' ].includes( '@' ) && !!member.Handle ).filter( member => !member[ 'Account Email' ].includes( '@anonymous.getunaty.com' ) )
	console.log( `${ has_handle_and_email.length } members have email and handle (${ members.length - has_handle_and_email.length } removed)` )
	return has_handle_and_email.map( member => ( {
		email: member[ 'Account Email' ],
		handle: member.Handle
	} ) )

}