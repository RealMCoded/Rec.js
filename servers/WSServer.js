const chalk = require('chalk')
const { WebSocketServer } = require('ws');

let port;

function start(servePort = 20161){
    try {
        port = servePort
        serve()
    } catch(e) {
        console.error(e)
    }
}

function serve() {
    const wss = new WebSocketServer({ port: port });
    
    wss.on('connection', function connection(ws) {
        ws.on('message', function message(data) {
            console.log(`${chalk.blueBright("[WS]")} Data received: ${data}`);
            let thing = processRequest(data)
            console.log(`${chalk.blueBright("[WS]")} Data sent: ${thing}`)
            ws.send(thing)
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
                    GameSession: process.session
                }
            });
        }else if (data.api == "heartbeat2"){
            result = JSON.stringify(data)
        } else {
            result = ""
        }
    } else {
        result = JSON.stringify(data)
    }

    return result;
}

module.exports = { start }