const ip = require( 'ip' )
const path = require( 'path' )

module.exports = {
	// Identity variables used in pug templates
	identity: {
		title: "Sandbox",
		desc: "",
		"logo": "/assets/sandbox_logo_rgb-500x113.png"
	},
	// System vars managing some pug elements as well as file paths
	system: {
		public: path.normalize( process.env.NODE_ENV == 'development' ? __dirname + '/../public/' : __dirname + '/../docs/' ),
		source: path.normalize( __dirname + '/../src/' ),
		url: process.env.local ? 'http://' + ip.address() + ':3000/' : 'https://sandbox.is/',
		gverification: undefined,
		timestamp: new Date().getTime(),
		year: new Date().getFullYear()
	},
	// About the author. Change this to your own unless you went me to get credit for your page of course... <3
	author: {
		firstname: "Sandbox",
		lastname: "Network"
	}
}