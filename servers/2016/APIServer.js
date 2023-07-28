const chalk = require('chalk') // colored text
const express = require('express') //express.js - the web server
const morgan = require('morgan') //for webserver output
const app = express()
const path = require("path")
app.use(morgan(`${chalk.green("[API]")} :method ":url" :status - :response-time ms`))
const { ports } = require("../../config.json")

let port;

function start(serveport = ports.API_2016){
    try {
        port = serveport
        serve()
    } catch(e) {
        console.error(e)
    }
}

async function serve() {
    /*
        GET REQUESTS
    */
    app.get('/', (req, res) => {
        res.redirect("https://realmcoded.github.io/Rec.js/port-in-use.html")
    })

    app.get('/api/versioncheck/*', (req, res) => {
        res.send("{\"ValidVersion\":true}")
    })

    app.get('/api/images/v1/profile/*', (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../../user-info/ProfileImage.png`))
    })

    app.get('/api/avatar/v3/items', (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../../user-info/avataritems.txt`))
    })

    app.get('/api/avatar/v2/gifts', (req, res) => {
        res.send("[]")
    })

    app.get('/api/relationships/v2/get', (req, res) => {
        res.send("[]")
    })

    app.get('/api/messages/v2/get', (req, res) => {
        res.send("[]")
    })

    app.get('/api/activities/charades/v1/words', (req, res) => {
        res.send(require("../../shared/charades.js").generateCharades())
    })

    app.get('/api/config/v2', (req, res) => {
        res.send(require('../../shared/config.js').config())
    })

    app.get('/api/avatar/v2', (req, res) => {
        res.send(JSON.stringify(require("../../shared/avatar.js").loadAvatar(2016)))
    })

    app.get('/api/settings/v2', (req, res) => {
        res.send(JSON.stringify(require("../../shared/settings.js").loadSettings()))
    })

    /*
        POST REQUESTS
    */
    app.post('/api/players/v1/getorcreate', (req, res) => {
        res.send(require("../../shared/getorcreate.js").GetOrCreate())
    })

    app.post('/api/settings/v2/set', (req, res) => {
        require("../../shared/settings.js").setSettings(req.body)
        res.send("[]")
    })

    app.post('/api/avatar/v2/gifts/create', (req, res) => {
        res.send("[]")
    })

    app.post('/api/players/v2/objective', (req, res) => {
        res.send("[]")
    })

    app.post('/api/avatar/v2/set', (req, res) => {
        require("../../shared/avatar.js").saveAvatar(req.body, 2016)
        res.send("[]")
    })

    app.post('/api/players/v1/list', (req, res) => {
        res.send("[]")
    })

    app.post('/api/images/v2/profile', (req, res) => {
        require("../../shared/profile.js").setPFP(req)
        res.sendStatus(200);
    })

    app.post('/api/presence/v2/', (req, res) => {
        res.send("[]")
    })
    
    app.listen(port, () => {
        console.log(`${chalk.green("[API]")} API started on port ${port}`)
    })
}

module.exports = { start }