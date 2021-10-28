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