// open nodejs.org/api to view all available api's .

// Requiring first module
const fs = require('fs');
const os = require('os');
var user = os.userInfo();

fs.appendFile('greeting.txt', `Hello ${user.username}!!`);