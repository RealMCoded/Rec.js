const fs = require("fs")

function loadAvatar(ver){
    let json;
    if (ver == 2016) json = JSON.parse(fs.readFileSync("./user-info/user.json")).avatar2016; else json = JSON.parse(fs.readFileSync("./user-info/user.json")).avatar2017;
    return json
}  

async function saveAvatar(req, ver){
    let json = req

    let tempSet = JSON.parse(fs.readFileSync("./user-info/user.json"))
    if (ver == 2016) tempSet.avatar2016 = json; else tempSet.avatar2017 = json;
    tempSet = JSON.stringify(tempSet)
    fs.writeFileSync("./user-info/user.json", tempSet)
}

module.exports = { loadAvatar, saveAvatar }