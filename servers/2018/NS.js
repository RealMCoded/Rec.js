const chalk = require('chalk') // colored text
const express = require('express') //express.js - the web server
const morgan = require('morgan') //for webserver output
const app = express()
const path = require("path")
app.use(morgan(`${chalk.red("[NS]")} :method ":url" :status - :response-time ms`))
const { ports } = require("../../config.json")

let port;

function start(serveport = ports.NS){
    try {
        port = serveport
        serve()
    } catch(e) {
        console.error(e)
    }
}

function serve() {
    /*
        GET REQUESTS
    */
    app.get('/', (req, res) => {
        res.send(JSON.stringify({API:"http://localhost:2018", Notifications:"http://localhost:20161", Images:"http://localhost:20182"}))
    })
    
    app.listen(port, () => {
        console.log(`${chalk.red("[NS]")} NameServer started on port ${port}`)
    })
}

module.exports = { start }