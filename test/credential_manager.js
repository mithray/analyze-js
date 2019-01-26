const Configstore = require('configstore');

var gtmetrix_email;
var gtmetrix_apikey;
var open_cage_data_apikey;

var gtmetrix = { 
	"email": "", 
	"apikey": "" 
}
var open_cage_data= { 
	"apikey": ""
}

class CredentialManager{
	constructor(name) {
		this.conf = new Configstore(name);
	}
	async getCredentials () {
		return this.conf.get( gtmetrix );
		if (email) {
			let email = this.conf.get('gtmetrix_apikey');
			return [ email, ]
		} else {
			let answers = await inquirer.prompt([
				{
					type: 'input',
					name: 'key',
					message: 'Enter your GTmetrix API Key:'}
			])
			this.conf.set('apiKey', answers.key)
			return [ answers.key ]
		}
	}
}

module.exports = CredentialManager;
