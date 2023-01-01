const fs = require("node:fs")

function GetOrCreate() {
    return JSON.stringify({
        "Id": 1,
        "Username": "Coach",
        "DisplayName": "Coach",
        "XP": 87,
        "Level": 99,
        "Reputation": 0,
        "Verified": true,
        "Developer": true,
        "HasEmail": true,
        "CanReceiveInvites": false,
        "ProfileImageName": "Coach",
        "HasBirthday": true
    })
}

module.exports = { GetOrCreate }