const chalk = require('chalk')
const { WebSocketServer } = require('ws');
const { ports, privateRooms } = require("../../config.json")

let port;

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

    wss.on('connection', (ws) => {
        console.log(`${chalk.blueBright("[WS]")} Client connected!`);
        ws.on('message', (data) => {
            console.log(`${chalk.blueBright("[WS]")} Data received: ${data}`);
            let thing = processRequest(data)
            console.log(`${chalk.blueBright("[WS]")} Data sent: ${thing}`)
            ws.send(thing)
        });

        ws.on('close', () => {
            console.log(`${chalk.blueBright("[WS]")} Client disconnected.`);
            process.session = undefined
        });
    });

    console.log(`${chalk.blueBright("[WS]")} WS started on port ${port}`)
}

function processRequest(data){
    let result;

    data = JSON.parse(data)

    if (data.api != undefined) {
        if (data.api == "playerSubscriptions/v1/update"){
            console.log(`${chalk.blueBright("[WS]")} Presence update called!`)
            return JSON.stringify({
                Id: 12, 
                Msg: {
                    PlayerId: data.param.PlayerIds[0],
                    IsOnline: true,
                    InScreenMode: false,
                    GameSession: process.session ?? null
                }
            });
        }else if (data.api == "heartbeat2"){
            result = JSON.stringify(data)
        } else {
            result = ""
        }
    } else {
        result = JSON.stringify({"SessionId": sessionid()})
    }

    return result;
}

function sessionid(){
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