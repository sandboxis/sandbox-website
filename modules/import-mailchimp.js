// Grab api key
require('dotenv').config( )

// Import api lib
const Mailchimp = require( 'mailchimp-api-v3' )

// Check for the api key
if ( !process.env.mcapikey ) return console.log( 'No API key was found. Please add one in your .env file. See the documentation of the dotenv package.' )

// Initiate api instance
const mailchimp = new Mailchimp( process.env.mcapikey )