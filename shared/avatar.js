const fs = require("node:fs")

function loadAvatar(){
    return JSON.parse(fs.readFileSync("./user-info/user.json")).avatar
}  

async function saveAvatar(req){
    let json = await require("./decode-request.js").decodeRequest(req)
    json = JSON.parse(json)
    //console.log(json)

    let tempSet = JSON.parse(fs.readFileSync("./user-info/user.json"))
    tempSet.avatar = json
    tempSet = JSON.stringify(tempSet)
    fs.writeFileSync("./user-info/user.json", tempSet)
}

module.exports = { loadAvatar, saveAvatar }