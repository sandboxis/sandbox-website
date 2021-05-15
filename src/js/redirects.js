// Helpers
const id = d => document.getElementById( d )
const redirect = url => window.location.href = url

// Password checker, to any fellow coder: yes this is mega unsecure. It's a cosmetic measure requested by the skillshare team, it was never meant to be secure
const passwordProtect = ( entered, password, url ) => {
	if( entered == password ) redirect( url )
}


export default function handleRedirects( ) {

	// These are URL redirects through js because I have no control over the DNS/server
	if ( id('store') ) redirect( 'https://sandbox-store.squarespace.com/' )
	if ( id('census') ) redirect( 'https://www.notion.so/2020-Sandbox-Community-Census-e88781767f074d0380cb0277607cc289' )
	if ( id('oncommunity') ) redirect( 'https://sandbox-store.squarespace.com/shop/on-community-a-modern-manifesto' )
	if ( id('communityresources') ) redirect( 'https://www.notion.so/Sandbox-Community-Member-Resources-1f834f39288946ac82b397d244d63161' )
	if ( id('gratitude') ) redirect( 'https://www.notion.so/Sandbox-Journeys-WG-2036dc10a35c4664872b0a8f54cc04af' )
	if ( id('zoom') ) redirect( 'https://us02web.zoom.us/j/8976969435' )
	if ( id('knowledge') ) redirect( 'https://www.notion.so/Sandbox-Community-Knowledge-Center-b304bddb1c094578a1023305a9192443' )
	if ( id('ambassadors') ) redirect( 'https://www.notion.so/Sandbox-Ambassadors-Resources-518059e93570407fa25c2c149aebc0ae' )
	if ( id( 'skillshare' ) ) {
		id( 'password' ).addEventListener( 'keyup', ( { target } ) => {

			// Look, they asked and I provided ok.
			passwordProtect( target.value, 'viewskills', 'https://www.notion.so/Sandbox-Skillshare-bbad6dac141a4be6be58fabb97fa76b0' )
			
		} )
	}

}