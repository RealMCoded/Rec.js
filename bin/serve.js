const chalk = require("chalk")
const { defaultVersion, autorunBuild, buildPaths } = require("../config.json")
const tryText = "Example Usage: \'npm run serve 2016\'."
const child_process = require('child_process')

function run(ver) {
    if (ver == undefined) {
        console.error(`${chalk.yellow('WARN:')} No version specified! Defaulting to version set in config.json...`)
        switch (defaultVersion) {
            case "2016": {ver = "2016";} break;
            case "2017": {ver = "2017";} break;
            case "2018": {ver = "2018";} break;
            default: {return console.error(`${chalk.red('ERROR:')} Invalid version specified in config.json. Expected "2016". Got "${defaultVersion}".`)} break;
        }
    }

    switch(ver){
        case "2016": {
            console.log(`${chalk.gray("[INFO]")} Starting 2016 server...`)
            //if (autorunBuild) {console.log(`${chalk.gray("[INFO]")} Starting 2016 client...`); child_process.execSync(buildPaths.rr2016)}
            require("../servers/2016/APIServer.js").start()
            require("../servers/WSServer.js").start()
        } break;
        //case "2017": {console.error("(2017 soon)")} break;
        //case "2018": {console.error("(2018 soon)")} break;
        default: {console.error(`${chalk.red('ERROR:')} Invalid version specified.\n${tryText}`)} break;
    }
}

module.exports = { run }