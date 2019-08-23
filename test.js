const escomplex = require('escomplex');
const fs = require('fs')
var source = fs.readFileSync('../cryptography-browser/src/dump.js', 'utf8')
var jsome = require('jsome');

const result = escomplex.analyse(source);

//console.log(result)

let halstead = result.aggregate.halstead

let summary = {
	'length': halstead.length,
	'vocabulary': halstead.vocabulary,
	'difficulty': halstead.difficulty,
	'volume': halstead.volume,
	'effort': halstead.effort,
	'bugs': halstead.bugs,
	'time_seconds': halstead.time,
	'time_hours': halstead.time / 3600
}

jsome(summary);
