module.exports = {
	// Identity variables used in pug templates
	identity: {
		title: "Website",
		desc: "Description of website",
		"logo": "logo.jpg"
	},
	// System vars managing some pug elements as well as file paths
	system: {
		public: __dirname + '/../public/',
		source: __dirname + '/../src/',
		url: process.env.local ? 'http://localhost:3000/' : 'https://www.liveurl.com',
		gverification: undefined,
		year: new Date().getFullYear()
	},
	// About the author. Change this to your own unless you went me to get credit for your page of course... <3
	author: {
		firstname: "Mentor",
		lastname: "Palokaj",
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