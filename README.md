## 🤔  What is this
A simple to run your es6 with https://github.com/zeit/pkg

## 👨🏼‍🔧  Install
make sure nodejs, npm and pkg is installed. Use ```npm i pkg -g```

## 👀 Files
```
| .babelrc          (config)
| .package.json     (config)
|--- src            (your ES6 nodejs project files)
|--- distr          (all transpiled files)
|    |
|    |---  html     (static html for program)
|--- execute        (all executables by pkg)
```


## 👨🏼‍💻 package.json > scripts
 ```json
    {
        "build": srcNode,
        "pkg": "pkg . --out-path execute",
        "all": "npm run build && npm run pkg",
        "linux": "npm run all && cd ./execute && ./es6-linux",
        "start": srcNode
    }
 ```

## 🤞 Make the executables
Run: ```npm run all```

This will pkg all executables in the folder ```execute```

