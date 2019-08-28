const getSVG = require('./lib/getDependenciesSVG.js')

let svg = getSVG('./index.js')
	.then( svg => {
		console.log(svg)
	})
