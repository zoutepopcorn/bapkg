import Class from './Class'
const c = new Class()
const fs = require('fs');
const carlo = require('carlo');
const path = require('path');
const os = require('os');
// const glob = require("glob-promise")
const globby = require('globby');

console.log(`(V) this is some ES6 JavaScript code /src`);


/* TODO
class Expose() {
}
*/


const run = async () => {
    console.log('run?')
    let app;
    try {
        app = await carlo.launch(
            {
                bgcolor: '#2b2e3b',
                title: 'Systeminfo App',
                width: 1000,
                height: 500,
                channel: ['stable'],
                icon: path.join(__dirname, '/app_icon.png'),
                args: process.env.DEV === 'true' ? ['--auto-open-devtools-for-tabs'] : [],
                localDataDir: path.join(os.homedir(), '.vuefolder'),

            });
    } catch(e) {
        console.log(e)
        console.log('Reusing the running instance');
        return;
    }
    app.on('exit', () => process.exit());
    app.on('window', window => window.load(`index.html`));
    app.serveFolder('html');

    // TODO: iterate class for all functions?
    await app.exposeFunction('print', print);
    await app.exposeFunction('homePath', homePath);
    await app.exposeFunction('curPath', curPath);
    await app.exposeFunction('globDir', globDir);

    // await app.load('./index.html'); // dist
    await app.load('http://localhost:8080');
    return app;
}

const print = async () => {
    const message = { text: 'in a bottle'};
    return message;
}

const homePath = async () => {
    return os.homedir();
}

const curPath = async () => {
    return os.homedir();
}

const globDir = async (dir) => {
    console.log(dir);
    // const content = await glob(`${dir}/*`, { cache: 'DIR'} );
    const paths = await globby([`${dir}/*`], { onlyDirectories: true }); //onlyDirectories, onlyFiles

    console.log(paths);
    return paths
}

//onlyFiles

const homeFolder = async () => {
    const message = { text: 'in a bottle'};
    return message;
}

run().then(() => {
    console.log(`i'm ready`)
})

// show assets
fs.readdir(__dirname, (err, items) => {
    console.log(' -- dirname -- ')
    console.log(items)
    fs.readdir(__filename, (err, items) => {
        console.log(' -- filename --')
        console.log(items);
    });
});

