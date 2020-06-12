import * as members from './memberlist'

export const initDatabaseSearch = async f => { 

	const searchresult = document.getElementById( 'searchresult' )
	const statussearch = document.querySelector( 'form#statussearch' )

	if ( !statussearch ) return

	// Get the initial member list and render it
	const [ memberlist, memberHashes ] = await Promise.all( [
		members.get( ).catch( f => [] ),
		members.getHashes( ).catch( f => [] )
	] )

	// manage the search bar on the member page
	statussearch.addEventListener( 'submit', async event => { 
		event.preventDefault()
		const query = event.target.query.value

		console.log( `Searching ${ memberlist.length } members for ${query}` )

		// Search first in the list with data
		let match = await members.searchByEmail( memberlist, query )
		if( match ) return searchresult.innerHTML = `✅ Found ${ match.name } in database! All good!`

		// If that fails search by hash only
		match = await members.searchByHash( memberHashes, query )

		if( !match ) return searchresult.innerHTML = `👻 No result found! If you are a Sandbox member please contact your ambassador!`
		return searchresult.innerHTML = `⚠️ Found ${ query } in database but without member data, please contact your ambassador.`
	 } )
 }

export const another = true