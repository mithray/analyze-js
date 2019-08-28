const madge = require('madge')
const jsonToDot = require('json-to-dot')
const Viz = require('viz.js')
const { Module, render } = require('viz.js/full.render.js')
const fs = require('fs')
let viz = new Viz({ Module, render })
const md = require('@mithray/md-terminal')
 
const options = { 
	"includeNpm": true,
	"backgroundColor": "#232323",
	"nodeColor": "#eaeaea",
	"cyclicNodeColor": "#efcdcc",
	"edgeColor": "#f8f8f8"
}

async function dotToSVG(dot){

	let svg = await viz.renderString(dot)
		.then( (svg) => {
			return svg
		})
  	.catch( (error) => {
			viz = new Viz({ Module, render })
//			console.error(error)
			return error
		})

	return svg
}

function toDot(json_graph){
	let dot_graph = jsonToDot(json_graph)
	return dot_graph
}

async function writeDependenciesSVG( entry_point, output_image_path ){

	let graph = await madge( entry_point, options )

	try {

		output_image_path = await graph.image(output_image_path)
		return output_image_path

	}	catch(err) {

		let fallback_prompt = `${err}
no graphviz installed, falling back to to viz.js
On a Debian based system you can type 
\`\`\`
apt-get install graphviz
\`\`\`
If you are using a non-Debian Linux based system you can figure it out!
If you are using Mac, I have nothing to say to you!`
		fallback_prompt = md(fallback_prompt)

		console.log(fallback_prompt)

		let dot 		= await toDot(graph.obj())
		let svg 		= await dotToSVG(dot)
		let written = await fs.writeFileSync( output_image_path, svg )

		return output_image_path

	}

}

module.exports = writeDependenciesSVG
