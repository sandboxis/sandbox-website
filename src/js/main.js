// Grab styles
import styles from '../css/styles.scss'

// These are URL redirects through js because I have no control over the DNS/server
if (document.getElementById('store')) window.location.href = 'https://sandbox-store.squarespace.com/'
if (document.getElementById('oncommunity')) window.location.href = 'https://sandbox-store.squarespace.com/shop/on-community-a-modern-manifesto'

// Make the manifesto video clickable
window.onload = f => { 
	const manifesto = document.getElementById( 'manifesto' )
	manifesto.addEventListener( 'click', e => {
		const video = document.createElement( 'iframe' )
		video.src = "https://player.vimeo.com/video/233941130?title=0&autoplay=1"
		video.width = '100%'
		console.log( manifesto.childNodes )
		manifesto.removeChild( manifesto.childNodes[0] )
		manifesto.appendChild( video )
		video.height = video.offsetWidth/1.7777777778
	 } )
 }