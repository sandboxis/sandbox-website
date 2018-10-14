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

const capitalise = ( text, isaname = false ) => {
	if ( typeof text != 'string' ) return undefined
	if ( isaname ) {
		let second = text.indexOf( ' ' )
		text = text.slice( 0, second + 1 ) + text.charAt( second + 1 ).toUpperCase(  ) + text.slice( second + 2 )
	 }
	return text.charAt( 0 ).toUpperCase(  ) + text.slice( 1 )
}

export const htmlify = members => {
	if ( ! typeof members == 'object' ) return console.log( 'Member json is not a json. Wut?', members )
	let listhtml = ''
	for (let i = members.length - 1; i >= 0; i--) {
		// Capitalise all output
		for ( let key in members[i] ) members[i][key] = key == 'name' ? capitalise( members[i][key], true ) : capitalise( members[i][key] )

		// Make a li with the member name and hub ( if there is a hub )
		let available = `<li style="font-weight: bold;">
							${ members[i].name } ${ members[i].hub ? ` (${ members[i].hub })` : '' }
						</li>`
		// Add the member bio if if exists
		available +=  members[i].bio ? `<li class='bio flow-text'>${ members[i].bio }</li>` : ''

		// Add slack and linkedin if they exist ( on the same line )
		available += members[i].slack || members[i].linkedin ? `<li>
																	${ members[i].slack ? `Slack: ${ members[i].slack }` : '' }
																	${ members[i].linkedin ? `${ members[i].slack ? ', ' : '' } <a href=${members[i].linkedin}>Linkedin</a>` : ''}
																</li>` : ''
		available += members[i].help ? `<li>Can help with: ${ members[i].help }</li>` : ''
		listhtml += `
		<ul>
			${ available }
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
