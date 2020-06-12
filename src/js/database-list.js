import * as members from './memberlist'

export const initMemberDatabase = async f => {
	const memberlistdiv = document.getElementById( 'memberlistview' )
	const membersearch = document.getElementById( 'membersearch' )

	if( !memberlistdiv ) return

	const memberlist = await members.get( ).catch( f => [] )
	memberlistdiv.innerHTML = members.htmlify( memberlist )

	// manage the search bar on the member page
	membersearch.addEventListener( 'submit', async event => { 
		event.preventDefault()
		console.log( `Searching ${memberlist.length} members` )
		const results = await members.search( memberlist, event.target.query.value )
		memberlistdiv.innerHTML = members.htmlify( results )
	 } )
}

export const another = true