// While writing json object to file, we first need to convert it to string using JSON.stringify(obj)
// To read json from file, we first need to parse json using JSON.parse to convert string to JSON Object
const fs = require('fs');
const originalNote = {
    title : 'My first note',
    body : 'This is the first note created by Ashish'
};

const stringifiedOrignalNote = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', stringifiedOrignalNote);

const noteString = fs.readFileSync('notes.json');
const noteObj = JSON.parse(noteString);
console.log(noteObj.title);