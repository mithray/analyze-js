const https = require("https");
//import https from 'https';
const sass = require("sass");
const fs = require("fs");
const site = require("../src/data/site.json")
const readChunk = require('read-chunk');
const fileType = require('file-type');
const CredentialManager = require('./credential_manager.js')

var resource_name = "report-pdf";
var domain = site.domain
const resources=[
	"filmstrip",
	"har",
	"pagespeed",
	"pagespeed-files",
	"report-pdf",
	"report-pdf-full",
	"screenshot",
	"video",
	"yslow"
];

if (process.argv.length > 1){
	arg = process.argv[2];
	if (resources.indexOf(arg) === -1) { 
		console.log(`No resource of this name available from gtmetrix.com: ${arg}`);
		console.log(`Will default to gtmetrix resource: ${resource_name}`);
	} else { 
		resource_name = arg;
		console.log(`Will download from gtmetrix.com resource: ${resource_name}`);
	}
}

async function getFileType(chunk){
	let type = await fileType(chunk);
	return type
}
async function writeTestFile(resource_name, data){
	let filePath = ( __dirname + "/" + resource_name);
	fs.writeFileSync( filePath, data, function(err){
    	if ( err ) console.log('ERROR: ' + err);
	})
	const chunk= readChunk.sync( filePath, 0, 4100);
	let type = await getFileType(chunk);
	let ext = type.ext
	let newFilePath = filePath + "." + ext
	fs.rename( filePath, newFilePath, function(err) {
    	if ( err ) console.log('ERROR: ' + err);
	});
	return newFilePath;
}

var email
var apikey
async function getCredentials(){
	const credentials = new CredentialManager('gtmetrix');
	[ email, apikey] = await credentials.getCredentials();
	console.log(email, key);
}
getCredentials().catch(console.error);


const gtmetrix = require ("gtmetrix") ({
    email: private["gtmetrix.com"].email,
    apikey: private["gtmetrix.com"].apikey,
    timeout: 5000
});

const test = {
    url: domain,
    location: 2,
    browser: 3
};

gtmetrix.test.create(test)
    .then( data => gtmetrix.test.get(data.test_id, resource_name, 5000))
	.then( data => writeTestFile(resource_name, data))
	.then(console.log)
