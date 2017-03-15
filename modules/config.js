const ip = require( 'ip' )

module.exports = {
	// Identity variables used in pug templates
	identity: {
		title: "Sandbox",
		desc: "",
		"logo": "/assets/sandbox_logo_rgb-500x113.png"
	},
	// System vars managing some pug elements as well as file paths
	system: {
		public: __dirname + '/../docs/',
		source: __dirname + '/../src/',
		url: process.env.local ? 'http://' + ip.address() + ':3000/' : 'http://sandbox.is/',
		gverification: undefined,
		timestamp: new Date().getTime(),
		year: new Date().getFullYear()
	},
	// About the author. Change this to your own unless you went me to get credit for your page of course... <3
	author: {
		firstname: "Sandbox",
		lastname: "Network",
		email: "mentor@palokaj.co",
		twitter: "@actuallymentor",
		// facebook profile id, used for retargeting ad permissions
		facebook: "1299359953416544",
		url: "https://www.skillcollector.com/"
	},
	// Tracking codes
	track: {
		ga: "UA-XXXXXXXX-XX"
	}
}