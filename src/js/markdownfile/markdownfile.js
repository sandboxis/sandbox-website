export const get = f => {
	return new Promise( ( resolve, reject) => {
		// Make a request
		const request = new XMLHttpRequest();
		// Grab file
		request.open( 'get','/assets/wiki/' + f, true);
		request.send(  );
		request.onreadystatechange = function (){	
			if ( this.readyState == 4 && this.status == 200 ) resolve(this.responseText);
			if ( this.readyState == 4 && this.status != 200 ) reject(this.responseText);
		}
		request.ontimmeout = reject;
	})
}

