const fs = require("node:fs")

function loadAvatar(){
    return JSON.parse(fs.readFileSync("./user-info/user.json")).avatar
}  

function saveAvatar(){

}

module.exports = { loadAvatar, saveAvatar }