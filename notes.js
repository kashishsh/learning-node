// Everything insile module.export object gets exported and can be used by importing this module.

module.exports.age = 28;

module.exports.addNote = () => {
    console.log('Adding note!!');
    return 'Note added...';
};

module.exports.add = (a,b) => {
    return a+b;
};