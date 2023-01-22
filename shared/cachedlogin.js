const { userid, level, username } = require("../user-info/user.json")
const { showDevInfo } = require("../config.json")

let platformId;

function cachedLogins(platID) {
    platformId = platID;
    return JSON.stringify([
        {
            "Id": userid,
            "Username": username,
            "DisplayName": username,
            "XP": 9999,
            "Level": level,
            "RegistrationStatus": 2,
            "Developer": showDevInfo,
            "CanReceiveInvites": false,
            "ProfileImageName": username,
            "JuniorProfile": false,
            "ForceJuniorImages": false,
            "PendingJunior": false,
            "HasBirthday": true,
            "AvoidJuniors": true,
            "PlayerReputation": {
                "Noteriety": 0,
                "CheerGeneral": 10,
                "CheerHelpful": 10,
                "CheerGreatHost": 10,
                "CheerSportsman": 10,
                "CheerCreative": 10,
                "CheerCredit": 20,
                "SubscriberCount": 0,
                "SubscribedCount": 0,
                "SelectedCheer": 0
            },
            "PlatformIds": [
                {
                    "Platform": 0,
                    "PlatformId": platformId
                }
            ]
        }
    ])
}

function loginCache() {
    return JSON.stringify({
        "Error": "",
        "Player":JSON.parse(cachedLogins(platformId))[0],
        "Token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTYxOTI4NzQ2MSwidmVycyI6IjIwMTcxMTE3X0VBIn0.-GqtcqPwAzr9ZJioTiz5v0Kl4HMMjH8hFMtVzQtRN5c",
        "FirstLoginOfTheDay": true,
        "AnalyticsSessionId": 392394,
        "CanUseScreenMode": true
    })
}

module.exports = { cachedLogins, loginCache }