// "process" work in a node app same as like window in webapp
// Arguments passed by user to node application resides in process.argv
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];

if(command === 'add') {
    console.log('Adding new note..');
} else if(command === 'list') {
    console.log('Listing all notes..');
} else if(command === 'read') {
    console.log('Reading notes..');
} else if(command === 'remove') {
    console.log('Removing notes..');
} else {
    console.log('Command not recognized');
}
console.log(process.argv);
