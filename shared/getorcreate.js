const { userid, level, username } = require("../user-info/user.json")

function GetOrCreate() {
    return JSON.stringify({
        "Id": userid,
        "Username": username,
        "DisplayName": username,
        "XP": 87,
        "Level": level,
        "Reputation": 0,
        "Verified": true,
        "Developer": true,
        "HasEmail": true,
        "CanReceiveInvites": false,
        "ProfileImageName": username,
        "HasBirthday": true
    })
}

module.exports = { GetOrCreate }