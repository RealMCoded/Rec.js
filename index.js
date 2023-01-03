const chalk = require("chalk")
const { version, dev } = require("./package.json")
let cmd = process.argv[2]
const fs = require("node:fs")
const tryText = "Example Usage: \'npm run serve 2016\'."
const child_process = require('child_process')

//Yellow Rec Room logo
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
console.log(chalk.yellow(`\nRecNet.js Version ${version}${(dev.is_dev == true ? dev.suffix : "")} (commit ${child_process.execSync('git rev-parse HEAD').toString().substring(0, 7)})`))
if (dev.is_dev == true) console.log(`${chalk.red(`\n⚠️WARNING⚠️`)}\nThis is a pre-release version of RecNet.js.
This version contains unfinished and untested code that may result in crashes.
Please report any bugs you may find to stuartt#5679!\n`)

//check for config
if (!fs.existsSync('./config.json')) {
    console.error(`${chalk.yellow('[WARN]')} config.json does not exist! Creating...\n`)
    fs.copyFileSync('./config.template.json', './config.json')
}

switch(cmd){
    case "serve": {
        require("./bin/serve.js").run(process.argv[3])
    } break;
    //case "2017": {console.error("(2017 soon)")} break;
    //case "2018": {console.error("(2018 soon)")} break;
    default: {console.error(`${chalk.red('[ERROR]')} Invalid or no command specified.\n${tryText}`)} break;
}