const chalk = require('chalk') // colored text
const express = require('express') //express.js - the web server
const morgan = require('morgan') //for webserver output
const bodyParser = require("body-parser")
const app = express()
const path = require("path")
app.use(morgan(`${chalk.green("[API]")} :method ":url" :status - :response-time ms`))
app.use(bodyParser.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies

const { userid, username } = require('../../user-info/user.json')
const { ports } = require("../../config.json")

let port;

function start(serveport = ports.API_2018){
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
        res.redirect("https://realmcoded.github.io/Rec.js/port-in-use.html")
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

    app.get('/api/gameconfigs/v1/all', (req, res) => {
        res.send(JSON.stringify([
            {"Key": "Gift.MaxDaily","Value": "100","StartTime": null,"EndTime": null},
            {"Key": "Gift.Falloff","Value": "1","StartTime": null,"EndTime": null},
            {"Key": "Gift.DropChance","Value": "100","StartTime": null,"EndTime": null},
            {"Key": "UseHeartbeatWebSocket","Value": "0","StartTime": null,"EndTime": null},
            {"Key": "Screens.ForceVerification","Value": "1","StartTime": null,"EndTime": null},
            {"Key": "forceRegistration","Value": "0","StartTime": null,"EndTime": null},
            {"Key": "Door.Creative.Query","Value": "#puzzle","StartTime": null,"EndTime": null},
            {"Key": "Door.Creative.Title","Value": "PUZZLE","StartTime": null,"EndTime": null},
            {"Key": "Door.Featured.Query","Value": "#featured","StartTime": null,"EndTime": null},
            {"Key": "Door.Featured.Title","Value": "Featured","StartTime": null,"EndTime": null},
            {"Key": "Door.Quests.Query","Value": "#quest","StartTime": null,"EndTime": null},
            {"Key": "Door.Quests.Title","Value": "QUESTS","StartTime": null,"EndTime": null},
            {"Key": "Door.Shooters.Query","Value": "#pvp #rro","StartTime": null,"EndTime": null},
            {"Key": "Door.Shooters.Title","Value": "PVP","StartTime": null,"EndTime": null},
            {"Key": "Door.Sports.Query","Value": "#sport","StartTime": null,"EndTime": null},
            {"Key": "Door.Sports.Title","Value": "SPORTS & PVP","StartTime": null,"EndTime": null}]
        ))
})

    app.get('/api/relationships/v2/get', (req, res) => {
        res.send("[]")
    })

    app.get('/api/messages/v2/get', (req, res) => {
        res.send("[]")
    })

    app.get('/api/checklist/v1/current', (req, res) => {
        res.send("[]")
    })

    app.get('/api/equipment/v1/getUnlocked', (req, res) => {
        res.send(require("../../shared/equipment.js").getequipment())
    })

    app.get('/api/events/v*/list', (req, res) => {
        res.send("[]")
    })

    app.get('/api/avatar/v*/saved', (req, res) => {
        res.send("[]")
    })

    app.get('/api/consumables/v1/getUnlocked', (req, res) => {
        res.send(JSON.stringify([
            {"Id":1,"ConsumableItemDesc":"7OZ5AE3uuUyqa0P","CreatedAt":"2022-02-18T23:29:59.9035571-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},
            {"Id":2,"ConsumableItemDesc":"_jnjYGBcyEWY5Ub4OezXcA","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},
            {"Id":3,"ConsumableItemDesc":"5hIAZ9wg5EyG1cILf4FS2A","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},//Cheese Pizza
            {"Id":4,"ConsumableItemDesc":"wUCIKdJSvEmiQHYMyx4X4w","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},//Supreme Pizza
            {"Id":5,"ConsumableItemDesc":"JfnVXFmilU6ysv-VbTAe3A","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},//Rootbeer
            {"Id":6,"ConsumableItemDesc":"InQ25wQMGkG_bvuD5rf2Ag","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},
            {"Id":7,"ConsumableItemDesc":"mMCGPgK3tki5S_15q2Z81A","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},
            {"Id":8,"ConsumableItemDesc":"ZuvkidodzkuOfGLDnTOFyg","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},
            {"Id":9,"ConsumableItemDesc":"VQSgL2pTLkWx4B3kwYG7UA","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},
            {"Id":10,"ConsumableItemDesc":"Tpxqe_lycUelySRHM8B0Vw","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false},
            {"Id":11,"ConsumableItemDesc":"-hy0qD-iUk-v4NHxNzanmg","CreatedAt":"2022-02-18T23:29:59.909138-05:00","Count":99,"UnlockedLevel":1,"IsActive":false}
        ]));
    });

    app.get('/api/consumables/v1/getUnlocked', (req, res) => {
        res.send("[]")
    })

    app.get('/api/storefronts/v1/allGiftDrops/2', (req, res) => {
        res.send("[]")
    })

    app.get('/api/objectives/v1/myprogress', (req, res) => {
        res.send(JSON.stringify({"Objectives":[{"Index":2,"Group":0,"Progress":0.0,"VisualProgress":0.0,"IsCompleted":false,"IsRewarded":false},{"Index":1,"Group":0,"Progress":0.0,"VisualProgress":0.0,"IsCompleted":false,"IsRewarded":false},{"Index":0,"Group":0,"Progress":0.0,"VisualProgress":0.0,"IsCompleted":false,"IsRewarded":false}],"ObjectiveGroups":[{"Group":0,"IsCompleted":false,"ClearedAt":"2021-04-18T01:59:14.8642558Z"}]}))
    })

    app.get('/api/rooms/v*/myrooms', (req, res) => {
        res.send("[]")
    })

    app.get('/api/rooms/v*/mybookmarkedrooms', (req, res) => {
        res.send("[]")
    })

    app.get('/api/rooms/v*/myRecent?*', (req, res) => {
        res.send("[]")
    })

    app.get('/api/playerevents/v1/all', (req, res) => {
        res.send(JSON.stringify({"Created":[],"Responses":[]}))
    })

    app.get('/api/challenge/v1/getCurrent', (req, res) => {
        res.send(JSON.stringify({"Success":true,"Message":"Rec.js"}))
    })

    app.get('/api/images/v1/named', (req, res) => {
        res.sendStatus(404)
        //Send a 404 error so posters will load.
        //Sending the commented out request below shows Unity question marks.
        //res.send("[{\"FriendlyImageName\":\"DormRoomBucket\",\"ImageName\":\"DormRoomBucket\",\"StartTime\":\"2021-12-27T21:27:38.1880175-08:00\",\"EndTime\":\"2025-12-27T21:27:38.1880399-08:00\"}")
    })

    /*
        POST REQUESTS
    */
    app.post('/api/platformlogin/v1/profiles', (req, res) => {
        res.send(require("../../shared/getorcreate.js").GetOrCreateArray())
    })

    //For compatibility with some early 2017 builds
    app.post('/api/players/v1/getorcreate', (req, res) => {
        res.send(require("../../shared/getorcreate.js").GetOrCreate())
    })

    app.post('/api/platformlogin/v1/', (req, res) => {
        res.send(JSON.stringify({Token:Buffer.from(`${username}_${userid}`).toString('base64'), PlayerId:`${userid}`, Error:""}))
    })

    app.post('/api/objectives/v1/updateobjective', (req, res) => {
        res.send("[]")
    })

    app.post('/api/platformlogin/v1/getcachedlogins', async (req, res) => {
        res.send(require("../../shared/cachedlogin.js").cachedLogins(req.body.PlatformId))
    })

    app.post('/api/platformlogin/v1/logincached', (req, res) => {
        res.send(require("../../shared/cachedlogin.js").loginCache())
    })

    app.post('/api/platformlogin/v1/createaccount', (req, res) => {
        res.send(require("../../shared/cachedlogin.js").loginCache())
    })

    app.post('/api/platformlogin/v1/loginaccount', (req, res) => {
        res.send(require("../../shared/cachedlogin.js").loginCache())
    })

    app.post('/api/settings/v2/set', (req, res) => {
        require("../../shared/settings.js").setSettings(req)
        res.send("[]")
    })

    app.post('/api/avatar/v2/set', (req, res) => {
        require("../../shared/avatar.js").saveAvatar(req.body, "2017")
        res.send("[]")
    })

    app.post('/api/players/v1/list', (req, res) => {
        res.send("[]")
    })
    
    app.post('/api/PlayerSubscriptions/v1/init', (req, res) => {
        res.send("[]")
    })

    app.post('/api/PlayerSubscriptions/v1/add', (req, res) => {
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

    app.post('/api/presence/v1/setplayertype', (req, res) => {
        //TODO: Get this to actually work.
        res.send("[]")
    })

    app.post('/api/gamesessions/v2/joinrandom', async (req, res) => {
        var ses = require("../../shared/sessions.js").joinRandom(req.body, "2018")
        process.session = ses //this makes it so i can share the variable later with the web socket.
        res.send(ses)
    })

    app.post('/api/gamesessions/v2/create', async (req, res) => {
        var ses = require("../../shared/sessions.js").create(req.body, "2018")
        process.session = ses //this makes it so i can share the variable later with the web socket.
        res.send(ses)
    })

    app.post('/api/gamesessions/v3/joinroom', async (req, res) => {
        console.log(`${chalk.yellow("[WARN]")} The endpoint "/api/gamesessions/v3/joinroom" does not work at the moment, and is expected to fail.`)
        var ses = require("../../shared/sessions.js").joinRoom(req.body, "2018")
        process.session = ses //this makes it so i can share the variable later with the web socket.
        res.send(ses)
    })
    
    app.listen(port, () => {
        console.log(`${chalk.green("[API]")} API started on port ${port}`)
    })
}

module.exports = { start }