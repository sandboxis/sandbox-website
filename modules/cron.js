const updateMembers = require( `${__dirname}/import-mailchimp.js` )
const shell = require( 'shelljs' )

console.log( process.argv[2] == 'once' ? 'Updating members once' : 'Started member update cron' )

// seconds * minutes hours
let frequency = 60 * 60 * 1
if ( !process.argv[2] == 'once' )
	setInterval( frequency, f => {
		updateMembers(  )
		.then( f => {
			return new Promise( ( resolve, reject ) => {
				let commit = shell.exec( `cd ${__dirname}/.. ;git pull; mkdir -p docs/assets; mkdir -p docs/js; cp src/assets/members.json docs/assets/members.json; git add -f docs/assets/members.json; git commit -am "Automated member database deployment"; git push;` )
				commit.code !== 0 ? reject( commit.code ) : resolve(  )
			} )
		} )
	} )
else
	updateMembers( )
	.then( f => {
		return new Promise( ( resolve, reject ) => {
			let commit = shell.exec( `cd ${__dirname}/..; git pull; mkdir -p docs/assets; mkdir -p docs/js; cp src/assets/members.json docs/assets/members.json; git add -f docs/assets/members.json; git commit -am 'Automated member database deployment'; git push;` )
			commit.code !== 0 ? reject( commit.code ) : resolve(  )
		} )
	} )