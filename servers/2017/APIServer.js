const chalk = require('chalk') // colored text
const express = require('express') //express.js - the web server
const morgan = require('morgan') //for webserver output
const app = express()
const path = require("path")
app.use(morgan(`${chalk.green("[API]")} :method ":url" :status - :response-time ms`))

let port;

function start(serveport = 2017){
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
        res.sendFile(path.resolve(`${__dirname}/../port-in-use.html`))
    })

    app.get('/api/versioncheck/*', (req, res) => {
        res.send("{\"ValidVersion\":true}")
    })

    app.get('/api/images/v1/profile/*', (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../../user-info/ProfileImage.png`))
    })

    app.get('/api/players/v1/*', (req, res) => {
        res.send(require("../../shared/getorcreate.js").GetOrCreate())
    })

    app.get('/api/avatar/v3/items', (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../../user-info/avataritems.txt`))
    })

    app.get('/api/avatar/v2/gifts', (req, res) => {
        res.send("[]")
    })

    app.get('/api/activities/charades/v1/words', (req, res) => {
        res.send(require("../../shared/charades.js").generateCharades())
    })

    app.get('/api/config/v2', (req, res) => {
        res.send(require('../../shared/config.js').config())
    })

    app.get('/api/avatar/v2', (req, res) => {
        res.send(JSON.stringify(require("../../shared/avatar.js").loadAvatar()))
    })

    app.get('/api/settings/v2', (req, res) => {
        res.send(JSON.stringify(require("../../shared/settings.js").loadSettings()))
    })

    app.get('/api/PlayerReporting/v1/moderationBlockDetails', (req, res) => {
        res.send("{\"ReportCategory\":0,\"Duration\":0,\"GameSessionId\":0,\"Message\":\"\"}")
    })

    app.get('/api/config/v1/amplitude', (req, res) => {
        res.send(JSON.stringify({AmplitudeKey: "NoKeyProvided"}))
    })

    /*
        POST REQUESTS
    */
    app.post('/api/platformlogin/v1/profiles', (req, res) => {
        res.send(require("../../shared/getorcreate.js").GetOrCreateArray())
    })

    app.post('/api/platformlogin/v6/', (req, res) => {
        res.send(JSON.stringify({Token:"j3923mHJG032jew", PlayerId:"25565", Error:""}))
    })

    app.post('/api/settings/v2/set', (req, res) => {
        require("../../shared/settings.js").setSettings(req)
        res.send("[]")
    })

    app.post('/api/avatar/v2/set', (req, res) => {
        require("../../shared/avatar.js").saveAvatar(req)
        res.send("[]")
    })

    app.post('/api/players/v1/list', (req, res) => {
        res.send("[]")
    })

    app.post('/api/images/v2/profile', (req, res) => {
        /*TODO: Make this actually upload as the profile image*/
        console.log(`${chalk.green("[API]")} ${chalk.yellow("[WARN]")} Image saving is bugged at the moment.`) //placeholder until i get it working
        require("../../shared/profile.js").setPFP(req)
        res.sendStatus(200);
    })

    app.post('/api/presence/v2/', (req, res) => {
        //TODO: Get this to actually work.
        res.send("[]")
    })
    
    app.listen(port, () => {
        console.log(`${chalk.green("[API]")} API started on port ${port}`)
    })
}

module.exports = { start }