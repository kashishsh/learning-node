const fs = require('fs');
const _ = require('lodash');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    var notes = fetchNotes();
    const note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
};
const getAll = () => {
    return fetchNotes();
}
const getNote = (title) => {
    var notes = fetchNotes();
    return _.find(notes, { title: title });
}
const removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return !_.isEqual(notes.length, filteredNotes.length);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}