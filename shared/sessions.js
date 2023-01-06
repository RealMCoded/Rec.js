const { privateRooms } = require('../config.json')
const { userid } = require('../user-info/user.json')

function joinRandom(req, ver){
    let json = JSON.parse(req)
    var creatorID = userid
    var sessionID = ver + "1"

    if (privateRooms) sessionID = Math.floor(Math.random() * (99 - 0 + 1) ) + 0;

    //console.log(json)

    var session = {
        Result: 0,
        GameSession: {
            GameSessionId: sessionID,
            RegionId: "us",
            RoomId: json.ActivityLevelIds[0],
            RecRoomId: null,
            EventId: null,
            CreatorPlayerId: creatorID,
            Name: "Rec.js Room",
            ActivityLevelId: json.ActivityLevelIds[0],
            Private: false,
            Sandbox: false,
            SupportsScreens: true,
            SupportsVR: true,
            GameInProgress: false,
            MaxCapacity: 20,
            IsFull: false
        }
    }

    //console.log(session)

    return JSON.stringify(session);
}

function create(req, ver){
    let json = JSON.parse(req)
    var creatorID = userid
    var sessionID = ver + "1"

    if (privateRooms) sessionID = Math.floor(Math.random() * (99 - 0 + 1) ) + 0;

    //console.log(json)

    var session = {
        Result: 0,
        GameSession: {
            GameSessionId: sessionID,
            RegionId: "us",
            RoomId: json.ActivityLevelId,
            RecRoomId: null,
            EventId: null,
            CreatorPlayerId: creatorID,
            Name: "Rec.js Room",
            ActivityLevelId: json.ActivityLevelId,
            Private: false,
            Sandbox: false,
            SupportsScreens: true,
            SupportsVR: true,
            GameInProgress: false,
            MaxCapacity: 20,
            IsFull: false
        }
    }

    //console.log(session)

    return JSON.stringify(session);
}

module.exports = { joinRandom, create }