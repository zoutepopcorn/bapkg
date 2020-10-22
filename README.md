## 🤔  What is this
A simple to run your es6 with https://github.com/zeit/pkg

## 😱 Install
make sure nodejs, npm and pkg is installed. 
Use 
```npm i pkg -g``` and then ```npm i```

## 👀 Files
```
| .babelrc          (config)
| .package.json     (config)
|--- src            (your ES6 nodejs project files)
|    |---  html     (will copy to distr)
|--- distr          (all transpiled files)
|    |
|    |---  html     (static html for program)
|--- execute        (all executables by pkg)
```


## 😻 package.json > scripts
 ```json
    "build": "babel src -d distr --presets es2015 --copy-files",
    "pkg": "pkg . --out-path execute",
    "all": "npm run build && npm run pkg",
    "linux": "npm run all && cd ./execute && ./es6-linux",
    "start": "cd src && babel-node index.js",
    "dist": "node distr/index.js"
 ```

## 🤞 Make the executables
Run: ```npm run all```

This will pkg all executables in the folder ```execute```

