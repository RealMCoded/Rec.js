const fs = require("node:fs")

function loadAvatar(ver){
    let json;
    if (ver == 2016) json = JSON.parse(fs.readFileSync("./user-info/user.json")).avatar2016; else json = JSON.parse(fs.readFileSync("./user-info/user.json")).avatar2017;
    console.log(json)
    return json
}  

async function saveAvatar(req, ver){
    let json = await require("./decode-request.js").decodeRequest(req)
    json = JSON.parse(json)
    //console.log(json)

    let tempSet = JSON.parse(fs.readFileSync("./user-info/user.json"))
    if (ver == 2016) tempSet.avatar2016 = json; else tempSet.avatar2017 = json;
    tempSet = JSON.stringify(tempSet)
    fs.writeFileSync("./user-info/user.json", tempSet)
}

module.exports = { loadAvatar, saveAvatar }