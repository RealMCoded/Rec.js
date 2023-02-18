const { version, dev } = require("../package.json")
const { ports, motdType } = require("../config.json")
const fs = require("fs")

function config(){
    var motd;

    switch(motdType){
        case "VERSION": {
            motd = `Rec.js Version ${version}${(dev.is_dev == true ? dev.suffix : "")} (commit ${process.commit})`
        } break;
        case "LOCAL": {
            try{
                motd = fs.readFileSync('./motd.txt', 'utf8');
            }catch(e){
                console.log(e)
                motd = `error reading motd from file :(\n\n${e.message}`
            }
        } break;
        default: {
            motd = `Rec.js Version ${version}${(dev.is_dev == true ? dev.suffix : "")} (commit ${process.commit})`
        } break;
    }

    return JSON.stringify({
        MessageOfTheDay: motd,
        CdnBaseUri: `http://localhost:${ports.IMG}/`,
        LevelProgressionMaps:[{"Level":0,"RequiredXp":1},{"Level":1,"RequiredXp":2},{"Level":2,"RequiredXp":3},{"Level":3,"RequiredXp":4},{"Level":4,"RequiredXp":5},{"Level":5,"RequiredXp":6},{"Level":6,"RequiredXp":7},{"Level":7,"RequiredXp":8},{"Level":8,"RequiredXp":9},{"Level":9,"RequiredXp":10},{"Level":10,"RequiredXp":11},{"Level":11,"RequiredXp":12},{"Level":12,"RequiredXp":13},{"Level":13,"RequiredXp":14},{"Level":14,"RequiredXp":15},{"Level":15,"RequiredXp":16},{"Level":16,"RequiredXp":17},{"Level":17,"RequiredXp":18},{"Level":18,"RequiredXp":19},{"Level":19,"RequiredXp":20},{"Level":20,"RequiredXp":21}],
        MatchmakingParams:{
            PreferFullRoomsFrequency: 1,
            PreferEmptyRoomsFrequency: 0
        },
        DailyObjectives: [[{"type":20,"score":1},{"type":21,"score":1},{"type":22,"score":1}],[{"type":20,"score":1},{"type":21,"score":1},{"type":22,"score":1}],[{"type":20,"score":1},{"type":21,"score":1},{"type":22,"score":1}],[{"type":20,"score":1},{"type":21,"score":1},{"type":22,"score":1}],[{"type":20,"score":1},{"type":21,"score":1},{"type":22,"score":1}],[{"type":20,"score":1},{"type":21,"score":1},{"type":22,"score":1}],[{"type":20,"score":1},{"type":21,"score":1},{"type":22,"score":1}]],
        ConfigTable: [{"Key":"Gift.DropChance","Value":"0.5"},{"Key":"Gift.XP","Value":"0.5"}],
        PhotonConfig: {"CloudRegion":"us","CrcCheckEnabled":false,"EnableServerTracingAfterDisconnect":false}
    })
}

module.exports = { config }