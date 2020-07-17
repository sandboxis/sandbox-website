// this fucntion access storage and load the documents from it
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
// This function will create html that is the content list for sidebar
export const list_content_html = list_of_content => {
	if ( ! typeof list_of_content == 'object' ) return console.log( 'List of content json is not a json. Wut?', list_of_content )
	let html = ''
	for (let i = 0; i < list_of_content.length; i++) {
		html += '<button class="accordion">'+list_of_content[i].title+'</button><div class="panel">';
		for(let j = 0; j < list_of_content[i].documents.length;j++){
			html +=  '<button class="item" id= "tab-'+i+'-'+j + '"/> - '+ list_of_content[i].documents[j].title + '</button>'; 
		}	
		html += '</div>';	
	}
	return [html, list_of_content];
}
