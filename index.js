const chalk = require("chalk")
const { version, dev } = require("./package.json")
let cmd = process.argv[2]
const fs = require("fs")
const tryText = "For a list of commands, run \'npm run help\'"
const child_process = require('child_process')
process.title = "Rec.js"

try{process.commit = child_process.execSync('git rev-parse HEAD').toString().substring(0, 7)} catch(e) {process.commit = "[git not installed]"}

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
console.log(chalk.yellow(`\nRec.js Version ${version}${(dev.is_dev == true ? dev.suffix : "")} (commit ${process.commit})\n`))
if (dev.is_dev == true) console.log(`${chalk.red(`⚠️WARNING⚠️`)}\nThis is a pre-release version of Rec.js.
This version contains unfinished and untested code that may result in crashes.
Please report any bugs you may find to the github repo! https://github.com/RealMCoded/Rec.js/issues \n`)

//check for config
if (!fs.existsSync('./config.json')) {
    console.error(`${chalk.yellow('[WARN]')} config.json does not exist! Creating...`)
    fs.copyFileSync('./config.template.json', './config.json')
}

//check for player config
if (!fs.existsSync('./user-info/user.json')) {
    console.error(`${chalk.yellow('[WARN]')} ./user-info/user.json does not exist! Creating...`)
    fs.copyFileSync('./user-info/user.template.json', './user-info/user.json')
    //Randomize UserID
    let plrjson = JSON.parse(fs.readFileSync("./user-info/user.json"))
    plrjson.userid = Math.floor(Math.random() * 99999)
    fs.writeFileSync("./user-info/user.json", JSON.stringify(plrjson))
}

if (cmd == undefined) {return require("./src/no-command.js").run()}

switch(cmd){
    case "serve": require("./src/serve.js").run(process.argv[3], process.argv[4]); break;
    case "config": require("./src/config.js").run(); break;
    case "help": require("./src/help.js").run(); break;
    default: console.error(`${chalk.red('[ERROR]')} Invalid command specified.\n${tryText}`); break;
}