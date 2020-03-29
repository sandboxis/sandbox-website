export const get_docs = f => {
	return new Promise( ( resolve, reject ) => {
		// Make a request
		const request = new XMLHttpRequest()

		// Grab the json
		request.open( 'get', 'assets/wiki/doc_list.json', true )
		request.send(  )

		// Handle the result
		request.onreadystatechange = function( ) {
			if ( this.readyState == 4 && this.status == 200 ) resolve( JSON.parse( this.responseText))
			if ( this.readyState == 4 && this.status != 200 ) reject( this.responseText )
		}
		request.ontimeout = reject
	} )
}
export const list_content_html = list_of_content => {
	if ( ! typeof list_of_content == 'object' ) return console.log( 'List of content json is not a json. Wut?', list_of_content )
	let html = ''
	for (let i = 0; i < list_of_content.length; i++) {
		html += '<div><input id="tab-'+ i + '" type="checkbox" name="tabs"><label for="tab-' + i + '">'+list_of_content[i].title+'</label><div class="tab-content">';
		for(let j = 0; j < list_of_content[i].documents.length;j++){
			html +=  '<p id= "tab-'+i+'-'+j + '"/>'+ list_of_content[i].documents[j].title + '</p>'; 
			
		}	
		html += '</div></div>';	
	}
	return [html, list_of_content];
}
