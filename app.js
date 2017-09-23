// Run npm init command to start using npm packages and create package.json file.
// npm install packagename --save : is used to update package.json file
// To require npm package- use same name which appears in package.jsonfile ..eg: require('lodash')
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();
