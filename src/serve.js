const chalk = require("chalk")
const { defaultVersion, autorunBuild, buildPaths } = require("../config.json")
const tryText = "Example Usage: \'npm run serve 2016\'."
const child_process = require('child_process')

function run(ver, port) {
    if (ver == undefined) {
        console.error(`${chalk.gray("[INFO]")} No version specified! Defaulting to version set in config.json...`)
        switch (defaultVersion) {
            case "2016": {ver = "2016";} break;
            case "2017": {ver = "2017";} break;
            case "2018": {ver = "2018";} break;
            default: {return console.error(`${chalk.red('[ERROR]')} Invalid version specified in config.json. Expected "2016", "2017". Got "${defaultVersion}".`)} break;
        }
    }

    switch(ver){
        case "2016": {
            if (autorunBuild) {console.log(`${chalk.gray("[INFO]")} Starting 2016 client...`); try{child_process.exec(buildPaths.rr2016)}catch(err){console.error(`${chalk.red('[ERROR]')} Something bad happened when trying to launch your build!\n\n${err.message}`)}}
            console.log(`${chalk.gray("[INFO]")} Starting 2016 server...`)
            require("../servers/2016/APIServer.js").start(port)
            require("../servers/shared/WSServer.js").start()
            console.log(`${chalk.yellowBright("Server is ready! Please start your build now.")}`)
        } break;
        case "2017": {
            if (autorunBuild) {console.log(`${chalk.gray("[INFO]")} Starting 2017 client...`); try{child_process.exec(buildPaths.rr2017)}catch(err){console.error(`${chalk.red('[ERROR]')} Something bad happened when trying to launch your build!\n\n${err.message}`)}}
            console.log(`${chalk.gray("[INFO]")} Starting 2017 server...`)
            console.log(`${chalk.yellow("[WARN]")} June/July 2017 builds are expected to fail because of a temporary change made to API requests. This should be fixed later.`)
            require("../servers/2017/APIServer.js").start(port)
            require("../servers/shared/WSServer.js").start()
            require("../servers/shared/CDN.js").start()
            console.log(`${chalk.yellowBright("Server is ready! Please start your build now.")}`)
        } break;
        case "2018": {
            if (autorunBuild) {console.log(`${chalk.gray("[INFO]")} Starting 2018 client...`); try{child_process.exec(buildPaths.rr2017)}catch(err){console.error(`${chalk.red('[ERROR]')} Something bad happened when trying to launch your build!\n\n${err.message}`)}}
            console.log(`${chalk.gray("[INFO]")} Starting 2018 server...`)
            console.log(`${chalk.yellow("[WARN]")} Only early 2018 builds work with this server, New builds (like September 2018) are expected to fail.`)
            require("../servers/2018/APIServer.js").start(port)
            require("../servers/shared/WSServer.js").start()
            require("../servers/2018/NS.js").start()
            require("../servers/shared/CDN.js").start()
            console.log(`${chalk.yellowBright("Server is ready! Please start your build now.")}`)
        } break;
        default: {console.error(`${chalk.red('[ERROR]')} Invalid version specified.\n${tryText}`)} break;
    }
}

module.exports = { run }