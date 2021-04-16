// Grab styles
import styles from '../css/styles.scss'

// Grab member parser
import * as members from './memberlist'
import { initDatabaseSearch } from './database-status'
import { initMemberDatabase } from './database-list'
import { initVideoResize } from './video-resize'
import { initMeetASandboxer } from './meet-a-sandboxer'


// These are URL redirects through js because I have no control over the DNS/server
const id = d => document.getElementById( d )
const redirect = url => window.location.href = url
if ( id('store') ) redirect( 'https://sandbox-store.squarespace.com/' )
if ( id('census') ) redirect( 'https://www.notion.so/2020-Sandbox-Community-Census-e88781767f074d0380cb0277607cc289' )
if ( id('oncommunity') ) redirect( 'https://sandbox-store.squarespace.com/shop/on-community-a-modern-manifesto' )
if ( id('communityresources') ) redirect( 'https://www.notion.so/Sandbox-Community-Member-Resources-1f834f39288946ac82b397d244d63161' )
if ( id('gratitude') ) redirect( 'https://www.notion.so/Sandbox-Journeys-WG-2036dc10a35c4664872b0a8f54cc04af' )
if ( id('zoom') ) redirect( 'https://us02web.zoom.us/j/8976969435' )
if ( id('knowledge') ) redirect( 'https://www.notion.so/Sandbox-Community-Knowledge-Center-b304bddb1c094578a1023305a9192443' )



window.onload = f => { 

	// init video resizing
	initVideoResize( )

	// If we are on the member page, make the member list
	initMemberDatabase()

	// If we are on the database check page
	initDatabaseSearch()

	// If we are on the meet a sandboxer page
	initMeetASandboxer()

 }
