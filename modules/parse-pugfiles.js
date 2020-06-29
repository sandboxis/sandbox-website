const fs = require( 'fs' )
const walk = require( 'recursive-readdir' )

// Grab all pug files from the root of the source directory
const getpugs = path => new Promise( ( res, rej ) => {

	const filter = ( file, stats ) => {
		// Do not ignore directories or pug files, 
		return !stats.isDirectory() && !file.includes( '.pug' ) || file.includes( '/pug/' )
	}
	walk( path, [ filter ], ( err, files ) => {
		if( err ) return rej( err )
		res( files )
	} )

} )

// Read the contents of these pug files and return as an array
const readdata = filepath => {
	return new Promise( ( resolve, reject ) => {
		fs.readFile( filepath, 'utf8', ( err, data ) => {
			if ( err ) return reject( err )
			// Resolve with an object that contains the name and data of a file
			resolve( { filepath: filepath, data: data } )
		} )
	} )
}

// Use the above two promises to return the pug files ( as pug syntax )
const returnpugs = path => {
	return new Promise( ( resolve, reject ) => {
		// Grab all .pug files
		getpugs( path ).then( files => {
			// Grab the content of all .pug files
			return Promise.all( files.map( filepath => { return readdata( filepath ) } ) )
		} ).then( resolve ).catch( reject )
	} )
}


module.exports = returnpugs
