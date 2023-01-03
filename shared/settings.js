const fs = require("node:fs")
const chalk = require('chalk') // colored text

async function setSettings(req) {
    let json = await require("./decode-request.js").decodeRequest(req)
    JSON.parse(json)
    if (json == "") return;
    //console.log(json)
    let currentSettings = loadSettings()
    for(const element of currentSettings){
        if (element.Key == json.Key){
            console.log(`${chalk.green("[API]")} Updated setting "${json.key}" to ${json.Value}`)
            element.Value = json.Value
        }
    }

    //Save settings
    let tempSet = JSON.parse(fs.readFileSync("./user-info/user.json"))
    tempSet.settings = currentSettings
    tempSet = JSON.stringify(tempSet)
    fs.writeFileSync("./user-info/user.json", tempSet)
}

function loadSettings(){
    return JSON.parse(fs.readFileSync("./user-info/user.json")).settings
}

module.exports = { setSettings, loadSettings }