const updateMembers = require( `${__dirname}/import-mailchimp.js` )
const shell = require( 'shelljs' )

// milliseconds * seconds * minutes hours
let frequency = 1000 * 60 * 60 * 1 // Every hour
console.log( process.argv[2] == 'once' ? 'Updating members once' : `Started member update cron every ${frequency/1000} seconds (${ frequnecy/1000/60/60 } hours)` )
if ( !( process.argv[2] == 'once' ) ) {
	// Set intervalled update
	console.log( 'Runing interval update' )
	setInterval( f => {
		updateMembers(  )
		.then( f => {
			return new Promise( ( resolve, reject ) => {
				let commit = shell.exec( `cd ${__dirname}/.. ;git pull; mkdir -p docs/assets; mkdir -p docs/js; cp src/assets/members.json docs/assets/members.json; git add -f docs/assets/members.json; git commit -am "Automated member database deployment"; git push;` )
				commit.code !== 0 ? reject( commit.code ) : resolve(  )
			} )
		} )
	}, frequency )
} else { 
	console.log( 'Running single update' )
	updateMembers( )
	.then( f => {
		return new Promise( ( resolve, reject ) => {
			let commit = shell.exec( `cd ${__dirname}/..; git pull; mkdir -p docs/assets; mkdir -p docs/js; cp src/assets/members.json docs/assets/members.json; git add -f docs/assets/members.json; git commit -am 'Automated member database deployment'; git push;` )
			commit.code !== 0 ? reject( commit.code ) : resolve(  )
		} )
	} )
}