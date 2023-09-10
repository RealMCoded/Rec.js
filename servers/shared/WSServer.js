const chalk = require('chalk')
const { WebSocketServer } = require('ws');
const { ports, privateRooms } = require("../../config.json")
const { userid } = require('../../user-info/user.json')

let port;

const ResponseResults = {
    RelationshipChanged: 1,
    MessageReceived: 2,
    MessageDeleted: 3,
    PresenceHeartbeatResponse: 4,
    SubscriptionListUpdated: 9,
    SubscriptionUpdateProfile: 11,
    SubscriptionUpdatePresence: 12,
    SubscriptionUpdateGameSession: 13,
    SubscriptionUpdateRoom: 15,
    ModerationQuitGame: 20,
    ModerationUpdateRequired: 21,
    ModerationKick: 22,
    ModerationKickAttemptFailed: 23,
    ServerMaintenance: 25,
    GiftPackageReceived: 30,
    ProfileJuniorStatusUpdate: 40,
    RelationshipsInvalid: 50,
    StorefrontBalanceAdd: 60,
    ConsumableMappingAdded: 70,
    ConsumableMappingRemoved: 71,
    PlayerEventCreated: 80,
    PlayerEventUpdated: 81,
    PlayerEventDeleted: 82,
    PlayerEventResponseChanged: 83,
    PlayerEventResponseDeleted: 84,
    PlayerEventStateChanged: 85,
    ChatMessageReceived: 90
};
  
function start(servePort = ports.WS){
    try {
        port = servePort
        serve()
    } catch(e) {
        console.error(e)
    }
}

function serve() {
    const wss = new WebSocketServer({ port: port });

    wss.on('connection', async (ws) => {
        console.log(`${chalk.blueBright("[WS]")} Client connected!`);
        ws.on('message', async (data) => {
            ws.send(await processRequest(data));
        });

        ws.on('close', () => {
            console.log(`${chalk.blueBright("[WS]")} Client disconnected.`);
            process.session = undefined
        });
    });

    console.log(`${chalk.blueBright("[WS]")} WS started on port ${port}`)
}

async function processRequest(data) {
    let res;
    
    console.log(`${chalk.blueBright("[WS]")} Data received: ${data}`);

    data = JSON.parse(data);

    if (data.api != undefined) {
        if (data.api === "playerSubscriptions/v1/update") {
            console.log(`${chalk.blueBright("[WS]")} Presence update called!`)
            res = await createResponse(12)
        } else if (data.api === "heartbeat2") {
            console.log(`${chalk.blueBright("[WS]")} Heartbeat called!`)
            res = await createResponse(4)
        } else {
            console.log(`${chalk.blueBright("[WS]")} Unknown call: "${data.api}". Sending blank response`)
            res = ""
        }
    } else {
        res = JSON.stringify({"SessionId": sessionid()})
    }

    console.log(`${chalk.blueBright("[WS]")} Data sent: ${res}`);
    return res;
}

async function createResponse(id) {
    return JSON.stringify({
        Id: id,
        Msg: {
            PlayerId: userid,
            IsOnline: true,
            InScreenMode: false,
            GameSession: process.session == undefined ? null : JSON.parse(process.session)
        }
    })
}

function sessionid() {
    if(process.session != null){
        //From my testing, this never seems to happen.
        //i'll still keep it here just incase.
        var _session = JSON.parse(process.session)
        return _session.GameSessionId
    } else {
        var sessionID = 20171
        if (privateRooms) sessionID = Math.floor(Math.random() * (99 - 0 + 1) ) + 0;
        return sessionID
    }
}

module.exports = { start }