const chalk = require('chalk') // colored text
const express = require('express') //express.js - the web server
const morgan = require('morgan') //for webserver output
const app = express()
const path = require("path")
app.use(morgan(`${chalk.green("[API]")} :method ":url" :status - :response-time ms`))
const { userid } = require('../../user-info/user.json')

let port;

function start(serveport){
    try {
        port = serveport ?? 2017
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
        res.send(JSON.stringify(require("../../shared/avatar.js").loadAvatar(2017)))
    })

    app.get('/api/settings/v2', (req, res) => {
        res.send(JSON.stringify(require("../../shared/settings.js").loadSettings()))
    })

    app.get('/api/PlayerReporting/v1/moderationBlockDetails', (req, res) => {
        res.send(JSON.stringify({"ReportCategory":0,"Duration":0,"GameSessionId":0,"Message":""}))
    })

    app.get('/api/config/v1/amplitude', (req, res) => {
        res.send(JSON.stringify({AmplitudeKey: "NoKeyProvided"}))
    })

    app.get('/api/relationships/v2/get', (req, res) => {
        res.send("[]")
    })

    app.get('/api/messages/v2/get', (req, res) => {
        res.send("[]")
    })

    app.get('/api/equipment/v1/getUnlocked', (req, res) => {
        res.send(require("../../shared/equipment.js").getequipment())
    })

    app.get('/api/events/v3/list', (req, res) => {
        res.send("[]")
    })

    app.get('/api/challenge/v1/getCurrent', (req, res) => {
        res.send(JSON.stringify({"Success":true,"Message":"RecNet.js"}))
    })

    app.get('/api/images/v1/named', (req, res) => {
        res.send("[{\"FriendlyImageName\":\"DormRoomBucket\",\"ImageName\":\"DormRoomBucket\",\"StartTime\":\"2021-12-27T21:27:38.1880175-08:00\",\"EndTime\":\"2025-12-27T21:27:38.1880399-08:00\"}")
    })

    /*
        POST REQUESTS
    */
    app.post('/api/platformlogin/v1/profiles', (req, res) => {
        res.send(require("../../shared/getorcreate.js").GetOrCreateArray())
    })

    app.post('/api/platformlogin/v6/', (req, res) => {
        let uid = userid.toString()
        res.send(JSON.stringify({Token:Buffer.from(uid).toString('base64'), PlayerId:uid, Error:""}))
    })

    app.post('/api/settings/v2/set', (req, res) => {
        require("../../shared/settings.js").setSettings(req)
        res.send("[]")
    })

    app.post('/api/avatar/v2/set', (req, res) => {
        require("../../shared/avatar.js").saveAvatar(req, "2017")
        res.send("[]")
    })

    app.post('/api/players/v1/list', (req, res) => {
        res.send("[]")
    })

    app.post('/api/images/v3/profile', (req, res) => {
        /*TODO: Make this actually upload as the profile image*/
        console.log(`${chalk.green("[API]")} ${chalk.yellow("[WARN]")} Image saving is bugged at the moment.`) //placeholder until i get it working
        require("../../shared/profile.js").setPFP(req)
        res.sendStatus(200);
    })

    app.post('/api/presence/v2/', (req, res) => {
        //TODO: Get this to actually work.
        res.send("[]")
    })

    app.post('/api/gamesessions/v2/joinrandom', (req, res) => {
        //NOTE: I'm doing it like this because it doesn't like me doing it with an async function.
        let body = '';
        req.setEncoding('utf8');
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                var ses = require("../../shared/sessions.js").joinRandom(body, "2017")
                process.session = ses //this makes it so i can share the variable later with the web socket.
                res.send(ses)
            } catch (er) {
                console.log(er.message)
                return 0;
            }
        });
    })

    app.post('/api/gamesessions/v2/create', (req, res) => {
        //NOTE: I'm doing it like this because it doesn't like me doing it with an async function.
        let body = '';
        req.setEncoding('utf8');
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                console.log(body)
                var ses = require("../../shared/sessions.js").create(body)
                process.session = ses //this makes it so i can share the variable later with the web socket.
                res.send(ses)
            } catch (er) {
                console.log(er.message)
                return 0;
            }
        });
    })
    
    app.listen(port, () => {
        console.log(`${chalk.green("[API]")} API started on port ${port}`)
    })
}

module.exports = { start }