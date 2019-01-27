const opencage = require('opencage-api-client');
const path = require('path');
const filepath = path.resolve( __dirname, "../src/data/site.json");
const site = require(filepath);
var fs = require('fs');

var address = [ 
	site.address_street, 
	site.address_locality, 
	site.address_region, 
	site.address_country
].join(', ')

var token = ...;

process.env.OCD_API_KEY=token;

opencage.geocode({q: address}).then(data => {
  if (data.status.code == 200) {
    if (data.results.length > 0) {
		var osm_url = data.results[0].annotations.OSM.url
		var lat  = data.results[0].geometry.lat
		var lng = data.results[0].geometry.lng
		site.longitude=lng
		site.latitude=lat
		site.url_osm=osm_url

		fs.writeFile(filepath, JSON.stringify(site, null, 4), function (err) {
			if (err) return console.log(err);
		});
    }
  }
}).catch(error => {
  console.log('error', error.message);
})

