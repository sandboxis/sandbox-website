const fs = require( 'fs' )

// Grab all pug files from the root of the source directory
const getpugs = path => {
	return new Promise( ( resolve, reject ) => {
		fs.readdir( path, ( err, files ) => {
			if ( err ) return reject( err )
			// This will return an array of file names that contain .pug
			resolve( files.filter( file => { return file.indexOf( '.pug' ) != -1 } ) )
		} )
	} )
}

// Read the contents of these pug files and return as an array
const readdata = ( path, filename ) => {
	return new Promise( ( resolve, reject ) => {
		fs.readFile( path + filename, 'utf8', ( err, data ) => {
			if ( err ) return reject( err )
			// Resolve with an object that contains the name and data of a file
			resolve( { filename: filename, data: data } )
		} )
	} )
}

// Use the above two promises to return the pug files ( as pug syntax )
const returnpugs = path => {
	return new Promise( ( resolve, reject ) => {
		// Grab all .pug files
		getpugs( path ).then( files => {
			// Grab the content of all .pug files
			return Promise.all( files.map( filename => { return readdata( path, filename ) } ) )
		} ).then( resolve ).catch( reject )
	} )
}


module.exports = returnpugs