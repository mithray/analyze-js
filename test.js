const Mocha = require('mocha')
const assert = require('assert')
const chai = require('chai')

/*
var mocha = new Mocha({
	reporter: 'mochawesome'
})
*/

describe( 'Array', function() {
	describe( '#indexOf()', function() {
		it('should return -1 when the value is not present', function(){
		assert.equal(-1, [1,2,3].indexOf(4))
		})
	})
})
