// Grab styles
import styles from '../css/styles.scss'

// Grab member parser
import * as members from './memberlist'
import { initDatabaseSearch } from './database-status'
import { initMemberDatabase } from './database-list'
import { initVideoResize } from './video-resize'
import { initMeetASandboxer } from './meet-a-sandboxer'

// Redirects
import handleRedirects from './redirects'


window.onload = f => { 

	// init video resizing
	initVideoResize( )

	// If we are on the member page, make the member list
	initMemberDatabase()

	// If we are on the database check page
	initDatabaseSearch()

	// If we are on the meet a sandboxer page
	initMeetASandboxer()

	// Handle redirects
	handleRedirects()

 }
