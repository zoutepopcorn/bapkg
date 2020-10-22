import fs from 'fs';
import {startServer} from './server'
const PATH = `${__dirname}/html`;

// show assets
fs.readdir(__dirname, (err, items) => {
    console.log(' -- dirname -- ')
    console.log(items)
    fs.readdir(__filename, (err, items) => {
        console.log(' -- filename --')
        console.log(items);
    });
});

startServer(PATH, 3333);
