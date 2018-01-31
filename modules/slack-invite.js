// Grab api key
require('dotenv').config( )

if( !process.env.slackkey ) return console.log( 'No slack API key found. Exiting' )

// Request function modded from the frontend
// Method = string, url = string with params
export const req = ( method, url ) => { 
	return new Promise( ( resolve, reject ) => {
		// Make a request
		const request = new XMLHttpRequest()

		// Configure and send request
		request.open( method, req, true )
		request.send(  )

		// Handle the result
		request.onreadystatechange = function( ) { 
			if ( this.readyState == 4 && this.status == 200 ) resolve( JSON.parse( this.responseText ) )
			if ( this.readyState == 4 && this.status != 200 ) reject( this.responseText )
		}
		request.ontimeout = reject
	} )
}

// Invite function
const invite = email => (
	if( !email ) return console.log( 'Invite initiated without email, ignoring' )
	const request = {
		url: 'https://slack.com/api/users.admin.invite?'
		params: `token=${process.env.slackkey}&email=${email}&channels=C4VJG91D0,C4UTYNXCZ,C5JH5Q0SV,C5K2A4NDR,C5P2TFVQW,C5K77V8J1&C5KU4DRHU&resend=true`
	}
	return req( 'get', `${request.url}${request.params}` )
)

module.exports = invite