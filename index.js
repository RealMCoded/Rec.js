const chalk = require("chalk")
const { version, dev } = require("./package.json")
let cmd = process.argv[2]
const fs = require("node:fs")
const tryText = "For a list of commands, run \'node . help\'"
const child_process = require('child_process')
process.title = "RecNet.js"

//Print logo
console.log(`
[49m [38;5;185;49m▄▄[48;5;185m                                     [38;5;185;49m▄▄[49m [m
[38;5;185;49m▄[48;5;185m    [49;38;5;185m▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀[48;5;185m    [38;5;185;48;5;185m▄[m
[48;5;185m   [49m                                     [48;5;185m   [m
[48;5;185m   [38;5;185;49m▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄[48;5;185m   [m
[48;5;185m                                           [m
[48;5;185m   [49;38;5;185m▀▀▀▀▀▀▀▀▀▀[48;5;185m   [49;38;5;185m▀▀▀▀▀▀▀▀▀▀▀[48;5;185m   [49;38;5;185m▀▀▀▀▀▀▀▀▀▀[48;5;185m   [m
[48;5;185m   [49m          [48;5;185m   [49m           [48;5;185m   [49m          [48;5;185m   [m
[48;5;185m   [49m          [48;5;185m   [49m           [48;5;185m   [49m          [48;5;185m   [m
[48;5;185m   [49m          [48;5;185m   [49m           [48;5;185m   [49m          [48;5;185m   [m
[48;5;185m   [49m          [48;5;185m   [49m           [48;5;185m   [49m          [48;5;185m   [m
[48;5;185m   [49m          [48;5;185m   [49m           [48;5;185m   [49m          [48;5;185m   [m
[48;5;185m   [49m          [48;5;185m   [49m           [48;5;185m   [49m          [48;5;185m   [m
[48;5;185m   [49m          [49;38;5;185m▀▀▀[49m           [49;38;5;185m▀▀▀[49m          [48;5;185m   [m
[48;5;185m   [38;5;185;49m▄[49m                                    [48;5;185m   [m
[48;5;185m     [38;5;185;49m▄▄[49m                              [38;5;185;49m▄▄[48;5;185m    [m
[48;5;185m        [38;5;185;49m▄▄▄[49m                      [38;5;185;49m▄▄▄[48;5;185m       [m
[48;5;185m   [49m  [49;38;5;185m▀▀[48;5;185m      [38;5;185;49m▄▄▄▄▄[49m        [38;5;185;49m▄▄▄▄▄[48;5;185m      [49;38;5;185m▀▀[49m [48;5;185m   [m
[48;5;185m   [49m      [49;38;5;185m▀▀[48;5;185m                      [49;38;5;185m▀▀[49m     [48;5;185m   [m
[48;5;185m   [49m            [49;38;5;185m▀▀▀▀▀▀▀▀▀▀▀▀▀▀[49m           [48;5;185m   [m
[48;5;185m   [49m                                     [48;5;185m   [m
[48;5;185m   [49m                                     [48;5;185m   [m
[48;5;185m   [49m                                     [48;5;185m   [m
[49;38;5;185m▀[48;5;185m                                         [38;5;185;48;5;185m▄[m
[49m [49;38;5;185m▀▀[48;5;185m                                     [49;38;5;185m▀▀[49m [m`)

//other welcome code
let commit;
try {commit = child_process.execSync('git rev-parse HEAD').toString().substring(0, 7)} catch(e) {commit = "[git not installed]"}
console.log(chalk.yellow(`\nRecNet.js Version ${version}${(dev.is_dev == true ? dev.suffix : "")} (commit ${commit})\n`))
if (dev.is_dev == true) console.log(`${chalk.red(`⚠️WARNING⚠️`)}\nThis is a pre-release version of RecNet.js.
This version contains unfinished and untested code that may result in crashes.
Please report any bugs you may find to the github repo! https://github.com/RealMCoded/RecNet.js/issues \n`)

//check for config
if (!fs.existsSync('./config.json')) {
    console.error(`${chalk.yellow('[WARN]')} config.json does not exist! Creating...\n`)
    fs.copyFileSync('./config.template.json', './config.json')
}

//check for player config
if (!fs.existsSync('./user-info/user.json')) {
    console.error(`${chalk.yellow('[WARN]')} ./user-info/user.json does not exist! Creating...\n`)
    fs.copyFileSync('./user-info/user.template.json', './user-info/user.json')
}

switch(cmd){
    case "serve": {
        require("./src/serve.js").run(process.argv[3], process.argv[4])
    } break;
    case "config": {
        require("./src/config.js").run()
    } break;
    case "help": {
        require("./src/help.js").run()
    } break;
    default: {console.error(`${chalk.red('[ERROR]')} Invalid or no command specified.\n${tryText}`)} break;
}