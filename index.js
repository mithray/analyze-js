var precinct = require('precinct');
var fs = require('fs');

var content = fs.readFileSync('/home/raymond/mithray/mnd/src/main.sass', 'utf8');

var deps = precinct(content, { type: 'sass' });

console.log(deps);
