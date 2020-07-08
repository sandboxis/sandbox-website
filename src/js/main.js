// Grab styles
import styles from '../css/styles.scss'

// Grab member parser
import * as members from './memberlist'
import { initDatabaseSearch } from './database-status'
import { initMemberDatabase } from './database-list'
import { initVideoResize } from './video-resize'


// Wiki sidebar
import * as docs from './wikisidebar'
//markdowneender
import MarkdownIt from 'markdown-it'
import * as markdown from './markdownfile'

// These are URL redirects through js because I have no control over the DNS/server
if (document.getElementById('store')) window.location.href = 'https://sandbox-store.squarespace.com/'
if (document.getElementById('oncommunity')) window.location.href = 'https://sandbox-store.squarespace.com/shop/on-community-a-modern-manifesto'
// Resize the video to the Vimeo aspect ratio
const resizeVideo = () => {
	const video = document.getElementById('manifestovideo')
	if (!video) return
	video.height = video.offsetWidth / 1.7777777778
}
// Markdown Parser
const parse = string => {
	return new MarkdownIt('default', {
		html: false,
		xhtmlOut: true,
		typographer: false,
		linkify: false,
		breaks: false,
	}).render(string)
}
window.onload = f => {

	// init video resizing
	initVideoResize()

	// If we are on the member page, make the member list
	const memberlist = document.getElementById('memberlistview')
	const membersearch = document.getElementById('membersearch')
	let memberstore = undefined
	if (memberlist) {
		// Get the initial member list and render it
		members.get()
			.then(members => {
				memberstore = members
				return members
			})
			.then(members.htmlify)
			.then(html => memberlist.innerHTML = html)
			.catch(console.log.bind(console))

		// manage the search bar on the member page
		membersearch.addEventListener('submit', event => {
			event.preventDefault()
			Promise.resolve(members.search(memberstore, event.target.query.value))
				.then(members.htmlify)
				.then(html => memberlist.innerHTML = html)
		})
	}
	const sidebar = document.getElementById('sidebar')
	let element = []
	if (sidebar) {
		docs.get_docs()
			.then(docs.list_content_html)
			.then(docs => {
				console.log(docs)
				sidebar.innerHTML = docs[0]
				return docs[1]
			})
			.then(contentliststore => {
				for (let i = 0; i < contentliststore.length; i++) {
					element.push([])
					for (let j = 0; j < contentliststore[i].documents.length; j++) {
						element[i].push(document.getElementById('tab-' + i + '-' + j))
						element[i][j].onclick = function () {
							const content = document.getElementById('content')
							if (content) {
								markdown.get(contentliststore[i].folder + '/' + contentliststore[i].documents[j].filename).
									then(markdown => { return parse(markdown) })
									.then(html => content.innerHTML = html)
							}

						}
					}
				}
			}
			)
	}
}

// Adjust video size when the window resizes
window.onresize = f => resizeVideo()
initMemberDatabase()

// If we are on the database check page
initDatabaseSearch()

 }
