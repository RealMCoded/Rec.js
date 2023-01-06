const fs = require("node:fs")

function getequipment(){
    return fs.readFileSync("./user-info/equipment.txt")
}

module.exports = { getequipment }