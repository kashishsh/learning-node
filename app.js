// Using yargs module, we can get user input in a parsed and easy manner so that it is easy to use in the application.
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv  = yargs.argv;
var command = argv._[0];

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log(`Note added with title: ${note.title}`);
    } else {
        console.log('Note title already in use.. please try a different one..!!!');
    }
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'read') {
    notes.getNote(argv.title);
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}
