import * as members from './memberlist'

export const initDatabaseSearch = async f => { 

	const searchresult = document.getElementById( 'searchresult' )
	const statussearch = document.querySelector( 'form#statussearch' )

	if ( !statussearch ) return

	// Get the initial member list and render it
	const memberlist = await members.get( ).catch( f => [] )
	console.log( memberlist[0] )

	// manage the search bar on the member page
	statussearch.addEventListener( 'submit', async event => { 
		event.preventDefault()
		const query = event.target.query.value

		console.log( `Searching ${ memberlist.length } members for ${query}` )
		const match = await members.searchByEmail( memberlist, query )

		console.log( 'Found', match )

		if( !match ) return searchresult.innerHTML = '👻 No result found'
		return searchresult.innerHTML = `✅ Found ${ match.name } in database!`
	 } )
 }

export const another = true