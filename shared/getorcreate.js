const { userid, level, username } = require("../user-info/user.json")
const { showDevInfo } = require("../config.json")

function GetOrCreate() {
    return JSON.stringify({
        "Id": userid,
        "Username": username,
        "DisplayName": username,
        "XP": 21,
        "Level": level,
        "Reputation": 0,
        "Verified": true,
        "Developer": showDevInfo,
        "HasEmail": true,
        "CanReceiveInvites": false,
        "ProfileImageName": username,
        "JuniorProfile": false,
        "ForceJuniorImages": false,
        "PendingJunior":false,
        "HasBirthday": true
    })
}

function GetOrCreateArray() {
    return JSON.stringify([{
        "Id": userid,
        "Username": username,
        "DisplayName": username,
        "XP": 21,
        "Level": level,
        "Reputation": 0,
        "Verified": true,
        "Developer": showDevInfo,
        "HasEmail": true,
        "CanReceiveInvites": false,
        "ProfileImageName": username,
        "JuniorProfile": false,
        "ForceJuniorImages": false,
        "PendingJunior":false,
        "HasBirthday": true
    }])
}

module.exports = { GetOrCreate, GetOrCreateArray }