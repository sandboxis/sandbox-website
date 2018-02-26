const updateMembers = require( `${__dirname}/import-mailchimp.js` )

console.log( process.argv[2] == 'once' ? 'Updating members once' : 'Started member update cron' )

// seconds * minutes hours
let frequency = 60 * 60 * 1
if ( !process.argv[2] == 'once' )
	setInterval( frequency, updateMembers )
else
	updateMembers( )