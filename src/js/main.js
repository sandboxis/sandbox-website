// Grab styles
import styles from '../css/styles.scss'

// Grab member parser
import * as members from './memberlist'
import { initDatabaseSearch } from './database-status'


// These are URL redirects through js because I have no control over the DNS/server
if (document.getElementById('store')) window.location.href = 'https://sandbox-store.squarespace.com/'
if (document.getElementById('oncommunity')) window.location.href = 'https://sandbox-store.squarespace.com/shop/on-community-a-modern-manifesto'

// Resize the video to the Vimeo aspect ratio
const resizeVideo = ( ) => { 
	const video = document.getElementById( 'manifestovideo' )
	if ( !video ) return
	video.height = video.offsetWidth/1.7777777778
 }


window.onload = f => { 

	// Make the manifesto video clickable
	const manifesto = document.getElementById( 'manifesto' )
	if ( manifesto ) manifesto.addEventListener( 'click', e => {
		manifesto.innerHTML = `<iframe
			id="manifestovideo"
			src="https://player.vimeo.com/video/233941130?title=0&autoplay=1"
			width="100%" height="auto"
			frameborder="0"
			webkitallowfullscreen mozallowfullscreen allowfullscreen>
		</iframe>`
		// Resize after click
		resizeVideo( )
	 } )

	// If we are on the member page, make the member list
	const memberlist = document.getElementById( 'memberlistview' )
	const membersearch = document.getElementById( 'membersearch' )
	let memberstore = undefined
	if ( memberlist ) { 
		// Get the initial member list and render it
		members.get( )
			.then( members => { 
				memberstore = members
				return members
			} )
			.then( members.htmlify )
			.then( html => memberlist.innerHTML = html )
			.catch( console.log.bind( console ) )

		// manage the search bar on the member page
		membersearch.addEventListener( 'submit', event => { 
			event.preventDefault(  )
			Promise.resolve( members.search( memberstore, event.target.query.value ) )
			.then( members.htmlify )
			.then( html => memberlist.innerHTML = html )
		 } )
	 }

	 // If we are on the database check page
	 initDatabaseSearch()

 }

// Adjust video size when the window resizes
window.onresize = f => resizeVideo( )