import Class from './Class'
const c = new Class()
const fs = require('fs');

console.log(`(V) this is some ES6 JavaScript code /src`);

// show assets
fs.readdir(__dirname, (err, items) => {
    console.log(' -- dirname -- ')
    console.log(items)
    fs.readdir(__filename, (err, items) => {
        console.log(' -- filename --')
        console.log(items);
    });
});

