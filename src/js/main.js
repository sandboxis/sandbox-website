// Grab styles
import styles from '../css/styles.scss'

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
	manifesto.addEventListener( 'click', e => {
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
 }

// Adjust video size when the window resizes
window.onresize = f => resizeVideo( )