/*
* TODO: Look into a better Websocket implementation instead of express. maybe ws?
*/

const chalk = require('chalk')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 20161
const expressWs = require('express-ws')(app);
app.use(morgan(`${chalk.blueBright("[WS]")} :method ":url" :status - :response-time ms`))

let version;

function startWS(ver){
    try {
        version = ver
        serve()
    } catch(e) {
        console.error(e)
    }
}

function serve() {
    //Test endpoint
    app.ws('/echo', function(ws, req) {
        ws.on('message', function(msg) {
          ws.send(`[RecNet.js] ${msg}`);
        });
    })

    app.ws('/api/notification/v2', function(ws, req) {
        //TODO: Get this to actually work.
        ws.send(`[]`);
    })
    
    app.ws('/hub/v1', function(ws, req) {
        //TODO: Get this to actually work.
        ws.send(`[]`);
    })

    app.listen(port, () => {
        console.log(`${chalk.blueBright("[WS]")} WS started on port ${port}`)
    })
}

module.exports = { startWS }