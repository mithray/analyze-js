var precinct = require('precinct');
const gtmetrix = require('gtmetrix');
var fs = require('fs');

var content = fs.readFileSync('/home/raymond/backup/mithray/mnd/src/main.sass', 'utf8');

var deps = precinct(content, { type: 'sass' });

console.log(deps);
