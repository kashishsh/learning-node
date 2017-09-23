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
    console.log('Available notes are: ', notes.getAll());
} else if(command === 'read') {
    var note = notes.getNote(argv.title);
    if(note) {
        console.log(note);
    } else {
        console.log('Note with this title does not exists');
    }    
} else if(command === 'remove') {
    var status = notes.removeNote(argv.title);
    if(status) {
        console.log('Note deleted!!');
    } else {
        console.log('Note with this title does not exists');
    }
} else {
    console.log('Command not recognized');
}
