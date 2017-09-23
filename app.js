// NodeMon watches the changes in files and reload the application.
// npm install nodemon -g  --- -g allows us to install npm package globally
// run- nodemon filename(app.js) to start keeping track of file changes and load application again

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();
