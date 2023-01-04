const fs = require("node:fs")
const chalk = require('chalk') // colored text

async function setSettings(req) {
    let json = await require("./decode-request.js").decodeRequest(req)
    json = JSON.parse(json)
    if (json == "") return;
    let currentSettings = loadSettings()
    for(const element of currentSettings){
        if (element.Key == json.Key){
            console.log(`${chalk.green("[API]")} Updated setting "${json.key}" to "${json.Value}". Was "${element.Value}"`)
            element.Value = json.Value
        }
    }

    //Save settings to Player config
    let tempSet = JSON.parse(fs.readFileSync("./user-info/user.json"))
    tempSet.settings = currentSettings
    tempSet = JSON.stringify(tempSet)
    fs.writeFileSync("./user-info/user.json", tempSet)
}

function loadSettings(){
    return JSON.parse(fs.readFileSync("./user-info/user.json")).settings
}

module.exports = { setSettings, loadSettings }