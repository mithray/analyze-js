const madge = require('madge')
const jsonToDot = require('json-to-dot')
const Viz = require('viz.js')
const { Module, render } = require('viz.js/full.render.js')
let viz = new Viz({ Module, render })
 
graph_options = {
	"includeNpm": true
}

const options = { graph: graph_options }

async function dotToSVG(dot){
	let svg = await viz.renderString(dot)
		.then( (svg) => {
			return svg
		})
  	.catch( (error) => {
			viz = new Viz({ Module, render })
			console.error(error)
		})
	return svg
}

function toDot(json_graph){
	let dot_graph = jsonToDot(json_graph)
	return dot_graph
}

async function getDependenciesSVG(filename){
	let svg = await madge('./index.js', options.graph)
	  .then( (graph) => {
			let dot = toDot(graph.obj());
			return dot
		})
		.then( (dot) => {
			let svg = dotToSVG(dot)
			return svg
		})
	
	return svg
}

module.exports = getDependenciesSVG
