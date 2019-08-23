const madge = require('madge');
//const renderDot = require('render-dot')
const jsonToDot = require('json-to-dot')

const Viz = require('viz.js');
const { Module, render } = require('viz.js/full.render.js');

let viz = new Viz({ Module, render });
 
const options = {}
options.graph = {
	"includeNpm": true
}


function dotToSVG(dot){
	viz.renderString(dot)
	  .then(result => {
						console.log('SVG HERE:')
		  console.log(result);
	  })
  	.catch(error => {
			viz = new Viz({ Module, render });
			console.error(error);
		});
}



function toDot(json_graph){
	let dot_graph = jsonToDot(json_graph)
	return dot_graph
}

madge('./index.js', options.graph)
  .then((res) => {
					console.log(res.obj())
		let dot = toDot(res.obj());
		console.log(dot)
		let SVG = dotToSVG(dot)
	});

/*
renderDot({
	input: 'digraph { a -> b; }'
}).then((res) => {
	console.log(res)
})
*/

