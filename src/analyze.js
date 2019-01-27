#!/usr/bin/env node
 
/**************************************
 * Analyze
 **************************************/
 
var program = require('commander');
 
program
  .version('0.0.1')
  .command('dependencies', 'create dependenciy graph')
  .command('speed','test site speed')
  .command('geocode','download map coordinates to site.json based on address')
//  .command('qrcode','generate qrcode for your site url')
  .parse(process.argv);
