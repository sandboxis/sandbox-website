export const get = f => { 
	return new Promise( ( resolve, reject ) => {
		// Make a request
		const request = new XMLHttpRequest()

		// Grab the json
		request.open( 'get', '/assets/members.json', true )
		request.send(  )

		// Handle the result
		request.onreadystatechange = function( ) { 
			if ( this.readyState == 4 && this.status == 200 ) resolve( JSON.parse( this.responseText ) )
			if ( this.readyState == 4 && this.status != 200 ) reject( this.responseText )
		}
		request.ontimeout = reject
	} )
}

export const htmlify = members => { 
	if ( ! typeof members == 'object' ) return console.log( 'Member json is not a json. Wut?', members )
	let listhtml = ''
	for (let i = members.length - 1; i >= 0; i--) {
		listhtml += `
		<ul>
			<li>Name: ${ members[i].name }</li>
			<li>Hub: ${ members[i].hub }</li>
			<li>Slack: ${ members[i].slack }</li>
			<li>Bio: ${ members[i].bio }</li>
			<li>Can help with: ${ members[i].help }
		</ul>
		<hr>
		`
	}
	return listhtml
}

export const search = ( members, search ) => (
	members.filter( member => { 
		// If one of the keys contains the query keep it
		for ( let key in member ) { 
			if ( member[key].toLowerCase().indexOf( search.toLowerCase() ) != -1 ) return true
		 }
		// If no keys match throw it out
		return false
	 } )
)