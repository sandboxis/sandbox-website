const fs = require( 'fs' )
const del = require( 'del' )
const mkdirp = require( 'mkdirp' )

process.on( 'unhandledRejection', ( error, promise ) => {
		console.log( 'UPR: ' + promise + ' with ' + error )
		console.log( error.stack )
	} )

// Promise structure for writing a file to disk
const writefile = ( where, what ) => {
	return new Promise( ( resolve, reject ) => {
		fs.writeFile( where, what, err => {
			if ( err ) return reject( err )
			resolve( what )
		} )
	} )
}

// Delete a folder through the promise api
const delp = what => {
	return new Promise( ( resolve, reject ) => {
		fs.access( what, err => {
			if ( !err ) return resolve( del.sync( [ what ] ) )
			resolve( )
		} )
	} )
}

// Make directory if it does not exist yet
const mkdir = path => {
	return new Promise( ( resolve, reject ) => {
		// Check if folder exists
		fs.access( path, err => {
			if ( !err ) return resolve( )
			// Mkdir -p so the path to the folder is creatd if it doesn't exist
			mkdirp( path, err => {
				if ( err ) return reject( )
				resolve( )
			} )
		} )
	} )
}

// Safely write a file by chacking if the path exists
const safewrite = ( path, file, content ) => {
	return new Promise( ( resolve, reject ) => {
		mkdir( path ).then( f => {
			return writefile( path + file, content )
		} ).then( resolve ).catch( reject )
	} )
}

module.exports = {
	write: writefile,
	swrite: safewrite,
	del: delp
}