const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const inquirer = require('inquirer')
const CredentialManager = require('./credential_manager.js')

describe('a credential manager', () => {
	var creds 
	before(() => {
		creds = new CredentialManager('GTmetrix_test')
	})
	context('with no existing credentials', () => {
		it('should prompt the user for credentials', async() => {
			sinon.stub(inquirer, 'prompt').resolves({email: 'foo', key: 'bar'})
			let [email, key] = await creds.getCredentials()
			expect(email).to.equal('foo')
			expect(key).to.equal('bar')
			expect(inquirer.prompt.calledOnce).to.be.true
			inquirer.prompt.restore()
		}
	)
	context('with existing credentials', () => {
		it('should return credentials', async() =>{
			let [email, key] = await creds.getCredentials();
			expect(email).to.equal('for');
			expect(key).to.equal('bar');
		})
	})
	after( () => {
		creds.conf.delete('email')
		creds.conf.delete('apikey')
	})
})
