const gtmetrix = require('gtmetrix');
const getSVG = require('./lib/getDependenciesSVG.js')
/*

var content = fs.readFileSync('/home/raymond/backup/mithray/mnd/src/main.sass', 'utf8');

var deps = precinct(content, { type: 'sass' });
*/


getSVG( './index.js' )
	.then( svg => {
		console.log(svg)
	})
