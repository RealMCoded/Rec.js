const chalk = require("chalk")
const chalkTable = require('chalk-table')
const { version, dev } = require("./package.json")
const ver = process.argv[2]
const tryText = "Example Usage: \'npm run serve 2016\'."

//Yellow Rec Room logo
console.log(`[49m [38;5;185;49m▄▄[48;5;185m                                     [38;5;185;49m▄▄[49m [m
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
console.log(chalk.yellow(`\nRecNet.js Version ${version}${(dev.is_dev == true ? dev.suffix : "")}`))
if (dev.is_dev == true) console.log(`${chalk.red(`\n⚠️WARNING⚠️`)}\nThis is a pre-release version of RecNet.js.
This version contains unfinished and untested code that may result in crashes.
Please report any bugs you may find to stuartt#5679!\n`)

if (ver == undefined) {return console.error(`${chalk.red('ERROR:')} No version specified!.\n${tryText}`)}

switch(ver){
    case "2016": {
        console.error("Starting 2016")
        require("./servers/APIServer.js").startAPI(2016)
        require("./servers/WSServer.js").startWS(2016)
    } break;
    //case "2017": {console.error("(2017 soon)")} break;
    //case "2018": {console.error("(2018 soon)")} break;
    default: {console.error(`${chalk.red('ERROR:')} Invalid version specified.\n${tryText}`)} break;
}