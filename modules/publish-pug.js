const pugfiles = require( __dirname + '/parse-pugfiles' )
const pfs = require( __dirname + '/parse-fs' )
const pug = require( 'pug' )

const site = require( __dirname + '/config' )

// Compile pug to html
const compilepug = ( path, filename ) => { 
	// Return a resolved promise with the file data
	return Promise.resolve( {
		path: path,
		filename: filename,
		// Compile the pug file with the site config as a local variable
		html: pug.renderFile( path + filename, { site: site } )
	} )
}

// Write html to disk
const writehtml = ( site, page ) => {
	return new Promise( ( resolve, reject ) => {
		// Use the safe write feature of the psf module
		pfs.swrite( site.system.public, page.filename.split( '.' )[ 0 ] + '.html', page.html )
		.then( resolve ).catch( reject )
	} )
}

// Combine the above two and the parse-pugfiles module to read, compile and write all pug files
const publishfiles = site => {
	return new Promise( ( resolve, reject ) => {
		pugfiles( site.system.source ).then( pugfiles => {
			// Pugfiles have .filename and .data
			return Promise.all( pugfiles.map( pugfile => { return compilepug( site.system.source, pugfile.filename ) } ) )
		} ).then( htmls => {
			// Html ( page ) has .path, .filename and .html
			return Promise.all( htmls.map( page => { return writehtml( site, page ) } ) )
		} ).then( resolve ).catch( reject )
	} )
}

module.exports = publishfiles