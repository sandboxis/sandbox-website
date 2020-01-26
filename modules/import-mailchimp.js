// Grab api key from local, not relevant for GH actions
require('dotenv').config( )

// File system
const fs = require( 'fs' )

// Import api lib
const Mailchimp = require( 'mailchimp-api-v3' )

// Import slack auto-invite
const slack = require( './slack-invite.js' )

// Check for the api key
if ( !process.env.mcapikey ) return console.log( 'No API key was found. Please add one in your .env file. See the documentation of the dotenv package.' )

// Initiate api instance
const mailchimp = new Mailchimp( process.env.mcapikey )

// Assumptions
const mainlistid = process.env.mainlistid
const mainlistname = process.env.mainlistname

// Check if the list matches the assumptions
module.exports = f => mailchimp.get( `/lists/${mainlistid}` )
.then( res => { 

	// Check if we are working on the right list
	if ( !( res.name == mainlistname ) ) throw new Error( `List name is not ${mainlistname} but ${res.name}` )
	if ( res.stats.member_count < 1000 ) throw new Error( `This list seems to small to be the main member list (${res.stats,member_count} members)` )

	return res.stats.member_count

} )
.then( memberCount => {

	// Mailchimp started paginating, so we need to make multiple requests
	const pages = Math.ceil( memberCount/1000 )
	const requests = [ ...Array( pages ) ].map( ( val, i ) => {
		return mailchimp.get( `/lists/${mainlistid}/members`, { 
			status: 'subscribed', // Only grab members who are not unsubscribed
			offset: i * 1000, // Offset of 1000
			count: 1000, // 1000 is the max
		} )
	} )

	console.log( 'Importing list from mailchimp' )

	// Grab all member data
	return Promise.all( requests )

} )
.then( responses => { 

	console.log( `Got ${ responses.length } pages of API data` )

	// Merge responses
	const reducer = ( acc, curr ) => {
		console.log( acc.length, curr.members.length )
		return [ ...acc, ...curr.members ]
	}
	const members = responses.reduce( reducer, [] )

	// Remove entries without a name
	console.log( `${members.length} total imported members` )

	// Only people with known names
	return members.filter( member => member.merge_fields.FNAME ? true : false )

} )
.then( knownmembers => { 
	console.log( `${knownmembers.length} members will be transformed` )
	// Normalise the member data for templating
	return {
		known: knownmembers.map( member => ( { 
			name: member.merge_fields.FNAME,
			hub: member.merge_fields.HUB,
			slack: member.merge_fields.SLACK,
			bio: member.merge_fields.BIO,
			help: member.merge_fields.HELP,
			linkedin: member.merge_fields.LINKEDIN
		} ) ),
		raw: knownmembers
	}
} )
.then( members => { 
	console.log( `Writing ${members.known.length} members to JSON` )
	return new Promise( ( resolve, reject ) => {
		fs.writeFile( `${ __dirname }/../src/assets/members.json`, JSON.stringify( members.known ), err => { 
			err ? reject( err ) : resolve( members.raw )
		} )
	} )
} )
.then( members => {
	console.log( `Adding ${members.length} members to slack` )
	// Invite everyone who has not set their slack handle and return the member array for the next operation
	return Promise.all( members.map( member => member.merge_fields.SLACK ? Promise.resolve( true ) : slack( member.email_address ) ) )
} )
.then( results => {
	return new Promise( ( resolve, reject ) => { 
		fs.writeFile( `${ __dirname }/../${ new Date() }-success.log.json`, JSON.stringify( results ), err => {
			err ? reject( err ) : resolve( results )
		} )
	} )
} )
.then( results => console.log( 'Template generation complete', process.env.verbose ? results : '' ) )
.catch( badresults => {
	console.log( 'Something went wrong in the promise chain' )
	return new Promise( ( resolve, reject ) => { 
		fs.writeFile( `${ __dirname }/../${ new Date() }-error.log.json`, JSON.stringify( badresults ), err => {
			err ? reject( err ) : resolve( badresults )
		} )
	} )
} )