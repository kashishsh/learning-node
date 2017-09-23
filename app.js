// open nodejs.org/api to view all available api's .

// Requiring first module
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();

var res = notes.addNote();
var sum = notes.add(2,3);
console.log(sum);
//fs.appendFile('greeting.txt', `Hello ${user.username}!! You are ${notes.age} years old`);