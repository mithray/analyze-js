const getSVG = require('./lib/writeDependenciesSVG.js')

let svg = getSVG( './index.js', './dependencies.svg' )
	.then( svg => {
		console.log('done')
	})
