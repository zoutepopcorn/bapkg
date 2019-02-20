'use strict';

var _Class = require('./Class');

var _Class2 = _interopRequireDefault(_Class);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var c = new _Class2.default();
var fs = require('fs');
var carlo = require('carlo');
var path = require('path');
var os = require('os');
// const glob = require("glob-promise")
var globby = require('globby');

console.log('(V) this is some ES6 JavaScript code /src');

/* TODO
class Expose() {
}
*/

var run = async function run() {
    console.log('run?');
    var app = void 0;
    try {
        app = await carlo.launch({
            bgcolor: '#2b2e3b',
            title: 'Systeminfo App',
            width: 1000,
            height: 500,
            channel: ['stable'],
            icon: path.join(__dirname, '/app_icon.png'),
            args: process.env.DEV === 'true' ? ['--auto-open-devtools-for-tabs'] : [],
            localDataDir: path.join(os.homedir(), '.vuefolder')

        });
    } catch (e) {
        console.log(e);
        console.log('Reusing the running instance');
        return;
    }
    app.on('exit', function () {
        return process.exit();
    });
    app.on('window', function (window) {
        return window.load('index.html');
    });
    app.serveFolder('html');

    // TODO: iterate class for all functions?
    await app.exposeFunction('print', print);
    await app.exposeFunction('homePath', homePath);
    await app.exposeFunction('curPath', curPath);
    await app.exposeFunction('globDir', globDir);

    // await app.load('./index.html'); // dist
    await app.load('http://localhost:8080');
    return app;
};

var print = async function print() {
    var message = { text: 'in a bottle' };
    return message;
};

var homePath = async function homePath() {
    return os.homedir();
};

var curPath = async function curPath() {
    return os.homedir();
};

var globDir = async function globDir(dir) {
    console.log(dir);
    // const content = await glob(`${dir}/*`, { cache: 'DIR'} );
    var paths = await globby([dir + '/*'], { onlyDirectories: true }); //onlyDirectories, onlyFiles

    console.log(paths);
    return paths;
};

//onlyFiles

var homeFolder = async function homeFolder() {
    var message = { text: 'in a bottle' };
    return message;
};

run().then(function () {
    console.log('i\'m ready');
});

// show assets
fs.readdir(__dirname, function (err, items) {
    console.log(' -- dirname -- ');
    console.log(items);
    fs.readdir(__filename, function (err, items) {
        console.log(' -- filename --');
        console.log(items);
    });
});