const updateMembers = require( `${__dirname}/import-mailchimp.js` )

// seconds * minutes hours
let frequency = 60 * 60 * 12
if ( !process.argv[2] == 'once' ) setInterval( frequency, updateMembers )
else updateMembers(  )