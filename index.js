//const gtmetrix = require('gtmetrix')
const writeSVG = require('./lib/writeDependenciesSVG.js')

/*

var content = fs.readFileSync('/home/raymond/backup/mithray/mnd/src/main.sass', 'utf8');

var deps = precinct(content, { type: 'sass' });
*/

async function writeDependenciesSVG( entry_point, output_image_path ){

	let path = await writeSVG( entry_point, output_image_path )

	return path

}

module.exports = writeDependenciesSVG

//getDependenciesSVG('./index.js')
