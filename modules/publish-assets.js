// promise based file parsing
const pfs = require( __dirname + '/parse-fs' )
// Recursive copy library
const ncp = require( 'ncp' )

let copyfolder = ( source, destination ) => {
	return new Promise( ( resolve, reject ) => {
		// Recursively copy all assets from the source to the public folder
		ncp( source, destination, err => {
			if ( err ) return reject(  err )
			resolve( )
		} )
	} )
}

const copyassets = site => {
	return new Promise( ( resolve, reject ) => {
		pfs.del( site.system.public + 'assets' ).then( f => {
			return copyfolder( site.system.source + 'assets', site.system.public + 'assets' )
		} ).then( resolve ).catch( reject )
	} )
}

module.exports = copyassets