// Grab api key
require('dotenv').config( )

// Grab requesting lib
const req = require ( 'request-promise-native' )

if( !process.env.slackkey ) return console.log( 'No slack API key found. Exiting' )

// Invite function
const invite = email => {
	if( !email ) return console.log( 'Invite initiated without email, ignoring' )
	// const request = {
	// 	url: 'https://slack.com/api/users.admin.invite?',
	// 	params: `token=${process.env.slackkey}&email=${email}&channels=C4VJG91D0,C4UTYNXCZ,C5JH5Q0SV,C5K2A4NDR,C5P2TFVQW,C5K77V8J1,C5KU4DRHU&resend=true`
	// }
	// This is a promise so the function returns a promise
	return req( {
		method: 'GET',
		uri: 'https://sandbox-slack-group.slack.com/api/users.admin.invite',
		qs: {
			token: process.env.slackkey,
			email: email,
			// Channels are annoucements, general, help, offers, retreats, ama, traveling to
			channels: 'C4VJG91D0,C4UTYNXCZ,C5JH5Q0SV,C5K2A4NDR,C5P2TFVQW,C5K77V8J1,C5KU4DRHU',
			resend: false
		}
	} )
}

module.exports = invite