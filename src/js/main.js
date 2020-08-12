// Grab styles
import styles from '../css/styles.scss'

// Grab member parser
import * as members from './memberlist'
import { initDatabaseSearch } from './database-status'
import { initMemberDatabase } from './database-list'
import { initVideoResize } from './video-resize'
import { initMeetASandboxer } from './meet-a-sandboxer'


// These are URL redirects through js because I have no control over the DNS/server
if (document.getElementById('store')) window.location.href = 'https://sandbox-store.squarespace.com/'
if (document.getElementById('census')) window.location.href = 'https://www.notion.so/2020-Sandbox-Community-Census-e88781767f074d0380cb0277607cc289'
if (document.getElementById('oncommunity')) window.location.href = 'https://sandbox-store.squarespace.com/shop/on-community-a-modern-manifesto'



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
