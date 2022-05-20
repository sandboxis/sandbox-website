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
	if ( id('web3') ) redirect( 'https://www.notion.so/sandboxdashboard/Web3-Sandbox-0a7f44bd53104309a8494f614d021019' )
	if ( id('census') ) redirect( 'https://www.notion.so/2020-Sandbox-Community-Census-e88781767f074d0380cb0277607cc289' )
	if ( id('oncommunity') ) redirect( 'https://sandbox-store.squarespace.com/shop/on-community-a-modern-manifesto' )
	if ( id('communityresources') ) redirect( 'https://www.notion.so/Sandbox-Community-Member-Resources-369464787b5c4de7b9fb72a9d2fa6a4c' )
	if ( id('gratitude') ) redirect( 'https://www.notion.so/Sandbox-Journeys-WG-172c3b9dd6db4c91afd1a62ea33565f3' )
	if ( id('zoom') ) redirect( 'https://us02web.zoom.us/j/8976969435' )
	if ( id('knowledge') ) redirect( 'https://www.notion.so/Sandbox-Community-Knowledge-Center-b304bddb1c094578a1023305a9192443' )
	if ( id('ambassadors') ) redirect( 'https://www.notion.so/sandboxdashboard/Sandbox-Ambassadors-Resources-7cc9990d7de1487db96e03c6dff94b5d' )
	if ( id( 'skillshare' ) ) {
		id( 'password' ).addEventListener( 'keyup', ( { target } ) => {

			// Look, they asked and I provided ok.
			passwordProtect( target.value, 'viewskills', 'https://www.notion.so/sandboxdashboard/Sandbox-Skillshare-ae70114cd7094ccba310bd48b417a902' )
			
		} )
	}

}
