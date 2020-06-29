const pugfiles = require( __dirname + '/parse-pugfiles' )
const pfs = require( __dirname + '/parse-fs' )
const pug = require( 'pug' )
const path = require( 'path' )

const site = require( __dirname + '/config' )

// Compile pug to html
const compilepug = filepath => { 
	// Return a resolved promise with the file data
	return Promise.resolve( {
		filepath: filepath,
		// Compile the pug file with the site config as a local variable
		html: pug.renderFile( filepath, { site: site } )
	} )
}

// Write html to disk
const writehtml = ( site, page ) => {
	return new Promise( ( resolve, reject ) => {
		// Use the safe write feature of the psf module
		const { dir, name } = path.parse( page.filepath )
		const relativeDir = `${ path.normalize( dir ) }/`.replace( site.system.source, '/' )
		pfs.swrite( path.normalize( site.system.public + relativeDir ), name + '.html', page.html )
		.then( resolve ).catch( reject )
	} )
}

// Combine the above two and the parse-pugfiles module to read, compile and write all pug files
const publishfiles = site => {
	return new Promise( ( resolve, reject ) => {
		pugfiles( site.system.source ).then( pugfiles => {
			// Pugfiles have .filepath and .data
			return Promise.all( pugfiles.map( pugfile => { return compilepug( pugfile.filepath ) } ) )
		} ).then( htmls => {
			// Html ( page ) has .path, .filepath and .html
			return Promise.all( htmls.map( page => { return writehtml( site, page ) } ) )
		} ).then( resolve ).catch( reject )
	} )
}

module.exports = publishfiles