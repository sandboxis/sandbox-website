// Grab api key
require('dotenv').config( )

// File system
const fs = require( 'fs' )

// Import api lib
const Mailchimp = require( 'mailchimp-api-v3' )

// Import slack auto-invite
const slack = request( './slack-invite.js' )

// Check for the api key
if ( !process.env.mcapikey ) return console.log( 'No API key was found. Please add one in your .env file. See the documentation of the dotenv package.' )

// Initiate api instance
const mailchimp = new Mailchimp( process.env.mcapikey )

// Assumptions
const mainlistid = process.env.mainlistid
const mainlistname = process.env.mainlistname

// Check if the list matches the assumptions
mailchimp.get( `/lists/${mainlistid}` ).then( res => { 

	// Check if we are working on the right list
	if ( !( res.name == mainlistname ) ) throw new Error( `List name is not ${mainlistname} but ${res.name}` )
	if ( res.stats.member_count < 1000 ) throw new Error( `This list seems to small to be the main member list (${res.stats,member_count} members)` )

	// Grab all member data
	return mailchimp.get( `/lists/${mainlistid}/members`, { 
		status: 'subscribed', // Only grab members who are not unsubscribed
		count: 99999999, // Arbitrarily large number so we get all members
	} )

} ).then( db => { 
	// Remove entries without a name
	console.log( `${db.members.length} total imported members` )
	return db.members.filter( member => member.merge_fields.FNAME ? true : false )
} ).then( knownmembers => { 
	console.log( `${knownmembers.length} members have a known name` )
	// Normalise the member data for templating
	return knownmembers.map( member => ( { 
		name: member.merge_fields.FNAME,
		hub: member.merge_fields.HUB,
		slack: member.merge_fields.SLACK,
		bio: member.merge_fields.BIO,
		help: member.merge_fields.HELP,
		linkedin: member.merge_fields.LINKEDIN
	} ) )
} )
.then( JSON.stringify )
.then( members => { 
	return new Promise( ( resolve, reject ) => {
		fs.writeFile( `${ __dirname }/../src/assets/members.json`, members, err => { 
			err ? reject( err ) : resolve( members )
		} )
	} )
} )
.then( members => console.log( 'Template generation complete', members.length ) )
.catch( err => console.log( err ) )