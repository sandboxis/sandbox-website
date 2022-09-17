import fetch from 'isomorphic-fetch'
import { log } from './helpers.mjs'
import 'dotenv/config'
const { domain, improv_mx_api_key, verbose, api_base_url } = process.env

export async function register_forward_with_improvmx( alias='', to='', logs=[], log_tag='request ', verbose=false ) {

	try {

		// Naive validation
		if( !to.includes( '@' ) ) throw new Error( `Not an email` )
		if( !alias.length ) throw new Error( 'No alias specified' )

		/* ///////////////////////////////
		// Register alias with API */
		const options = {
			method: 'POST',
			headers:{
				Authorization: `Basic api:${ improv_mx_api_key }`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( {
				alias: alias,
				forward: to
			} )
		}
		// log( 'Calling with ',  options )
		const endpoint = `${ api_base_url }/domains/${domain}/aliases`
		const res = await fetch( endpoint, options )
		// const res_backup = res.clone()

		/* ///////////////////////////////
		// Check the result of our registration */
		const api_response = await res.json()
		
		try {

			/* ///////////////////////////////
			// Nonbreaking errors: things that fail but fhould not exit the script or trigger a retry */
			if( api_response.errors?.alias?.find( entry => entry.includes( 'update the existing one' ) ) ) throw new Error( `Alias already exists` )

			// If an error ocurred, save it to the logs
			if( !api_response.success ) {

				log( `[ ${ new Date().toLocaleTimeString() } ] Creation errors for ${ log_tag }: `, api_response )
				logs.push( {
					source: `From ${ alias } to ${ to }, ${ log_tag }`,
					error: e.message
				} )
				// Error saved, return without throwing
				return
			}

			return api_response

		} catch( e ) {

			// Ignore rate limit errorss
			if( api_response.code == 429 ) throw new Error( `rate limit` )


			/* ///////////////////////////////
			// On failure, attempt to update this entry */
			// log( `Creation failed with `, await res_backup.text() )
			const update_endpoint = `${ api_base_url }/domains/${ domain }/aliases/${ alias }`
			const opt = { ...options, method: 'PUT' }
			// console.log( `updating with ${ update_endpoint } `, opt )
			const update_response = await fetch( update_endpoint, opt ).then( r => r.json() )
			

			// If the update triggered a 404, exit silently
			if( update_response.code == 404 ) return

			// If this was a failed domain lookup, exit silently
			if( update_response.errors?.forward?.find( entry => entry.includes( 'requested domain name was not found' ) ) ) {

				logs.push( {
					source: `From ${ alias } to ${ to }, ${ log_tag }`,
					error: 'DNS lookup failed'
				} )

				return
			}

			// If the update failed too, toss the error to logging
			if( !update_response.success ) {
				log( `[ ${ new Date().toLocaleTimeString() } ] Update errors for ${ log_tag }: `, update_response )
				throw new Error( update_response.error || update_response.code )
			}

		}



	} catch( e ) {

		// Add errors to log array
		logs.push( {
			source: `[ ${ new Date().toLocaleTimeString() } ] From ${ alias } to ${ to }, ${ log_tag }`,
			error: e.message
		} )

		// Throw error so the retrier knows to retry
		throw new Error( `Request failed with ${ e.message }` )

	}

}
