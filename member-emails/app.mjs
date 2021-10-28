import { readCsv } from './modules/csv.mjs'

async function registerForwardWithImprovMX( apiKey, alias='', to='', logs=[] ) {


	try {

		// Naive validation
		if( !to.includes( '@' ) ) throw new Error( `Not an email` )
		if( !alias.length ) throw new Error( 'No alias specified' )

		// Register with api
		const options = {
			method: 'POST',
			headers:{
				Authorization: `Basic ${ apiKey }`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( {
				alias: alias,
				forward: to
			} )
		}
		const domain = `member.sandbox.is`
		const endpoint = `https://improvmx.com/api/domains/${domain}/aliases`
		const res = await fetch( endpoint, options )
			.then( r => r.json() )
			.catch( e => {

				// If create failed try update
				const opt = { ...options, method: 'PUT' }
				return fetch( endpoint, opt ).then( r => r.json() )

			} )


	} catch( e ) {

		logs.push( {
			source: `From ${ alias } to ${ to }`,
			error: e.message
		} )

	}

}