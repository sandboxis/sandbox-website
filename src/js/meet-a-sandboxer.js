const q = query => document.querySelector( query )
const qa = query => document.querySelectorAll( query )

const hideAllBoxiesExcept = id => {

	// Get all boxies
	const boxies = qa( '.boxie' )

	// Hide elements
	for (var i = boxies.length - 1; i >= 0; i--) {
		if( boxies[i].id != id ) boxies[i].classList.add( 'hide' )
	}

}

const closeBoxie = id => {

	// Get all boxies
	const boxies = qa( '.boxie' )

	// Hide bio of current boxie
	q( `#${id}` ).classList.remove( 'active' )

	// Hide elements
	for (var i = boxies.length - 1; i >= 0; i--) {
		if( boxies[i].id != id ) boxies[i].classList.remove( 'hide' )
	}

}

const showBoxie = id => {

	// Hide all excep this boxie
	hideAllBoxiesExcept( id )

	// Show details on this boxie
	q( `#${id}` ).classList.add( 'active' )

}

export const initMeetASandboxer = f => {

	// Get all boxies
	const boxies = qa( '.boxie' )

	// Listen for clicks on all boxies
	for ( let i = boxies.length - 1; i >= 0; i-- ) {

		// Listen to clicks on this boxie
		boxies[i].addEventListener( 'click', e => e.target.classList.contains( 'backbutton' ) ? closeBoxie( boxies[i].id ) : showBoxie( boxies[i].id ) )
	}
}

export const another = true