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
            console.log(`${chalk.blueBright("[WS]")} received: ${data}`);
            ws.send(JSON.stringify(data))
        });
    });
    console.log(`${chalk.blueBright("[WS]")} WS started on port ${port}`)
}

module.exports = { start }