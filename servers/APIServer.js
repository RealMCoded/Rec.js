const chalk = require('chalk')
const express = require('express')
const morgan = require('morgan')
const app = express()
let port = 2016
const path = require("path")
const { userid } = require("../user-info/user.json")
app.use(morgan(`${chalk.green("[API]")} :method ":url" :status - :response-time ms`))

let version;

function startAPI(ver, serve_port = 2016){
    try {
        port = serve_port
        version = ver
        serve()
    } catch(e) {
        console.error(e)
    }
}

function serve() {
    //GET
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/port-in-use.html`))
    })

    app.get('/api/versioncheck/v1', (req, res) => {
        res.send("{\"ValidVersion\":true}")
    })

    app.get('/api/images/v1/profile/', (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../user-info/ProfileImage.png`))
    })

    app.get(`/api/images/v1/profile/${userid}`, (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../user-info/ProfileImage.png`))
    })

    app.get('/api/avatar/v3/items', (req, res) => {
        res.sendFile(path.resolve(`${__dirname}/../user-info/avataritems.txt`))
    })

    app.get('/api/avatar/v2/gifts', (req, res) => {
        res.send("[]")
    })

    app.get('/api/config/v2', (req, res) => {
        res.send(require('../shared/config.js').config())
    })

    app.get('/api/avatar/v2', (req, res) => {
        res.send(JSON.stringify({"OutfitSelections":"b33dbeee-5bdd-443d-aa6a-761248054e08,,,,1;6d48c545-22bb-46c1-a29d-0a38af387143,,,,2;6d48c545-22bb-46c1-a29d-0a38af387143,,,,3;102c625b-b988-4bf8-a2aa-a31ad7029cdc,bd4a84e2-b67a-4269-a26a-17fb23ddb09e,ccf1ccc1-e229-4157-bb74-f2cdef01e547,,0;d0a9262f-5504-46a7-bb10-7507503db58e,ba6b6e1a-a09a-4ba0-9523-552869f03336,,d461ca71-45c9-415e-8e09-ba93e8d73450,1;193a3bf9-abc0-4d78-8d63-92046908b1c5,,,,0;3a790be3-2937-44d4-be01-b5d65353bd3d,,,,2;3a790be3-2937-44d4-be01-b5d65353bd3d,,,,3;e15b13a7-9e9a-4b32-ba2c-0cb31ed55a8c,,,,1","FaceFeatures":"{\"ver\":3,\"eyeId\":\"AjGMoJhEcEehacRZjUMuDg\",\"eyePos\":{\"x\":0.0,\"y\":0.0},\"eyeScl\":0.0,\"mouthId\":\"FrZBRanXEEK29yKJ4jiMjg\",\"mouthPos\":{\"x\":0.0,\"y\":0.0},\"mouthScl\":0.0,\"beardColorId\":\"befcc00a-a2e6-48e4-864c-593d57bbbb5b\"}","SkinColor":"85343b16-d58a-4091-96d8-083a81fb03ae","HairColor":"befcc00a-a2e6-48e4-864c-593d57bbbb5b"}))
    })

    app.get('/api/settings/v2', (req, res) => {
        res.send(JSON.stringify([{"Key":"MOD_BLOCKED_TIME","Value":"0"},{"Key":"MOD_BLOCKED_DURATION","Value":"0"},{"Key":"PlayerSessionCount","Value":"0"},{"Key":"ShowRoomCenter","Value":"1"},{"Key":"QualitySettings","Value":"3"},{"Key":"Recroom.OOBE","Value":"100"},{"Key":"VoiceFilter","Value":"0"},{"Key":"VIGNETTED_TELEPORT_ENABLED","Value":"0"},{"Key":"CONTINUOUS_ROTATION_MODE","Value":"0"},{"Key":"ROTATION_INCREMENT","Value":"0"},{"Key":"ROTATE_IN_PLACE_ENABLED","Value":"0"},{"Key":"TeleportBuffer","Value":"0"},{"Key":"VoiceChat","Value":"1"},{"Key":"PersonalBubble","Value":"0"},{"Key":"ShowNames","Value":"1"},{"Key":"H.264 plugin","Value":"1"}]))
    })

    //POST
    app.post('/api/players/v1/getorcreate', (req, res) => {
        res.send(require("../shared/getorcreate.js").GetOrCreate())
    })

    app.post('/api/settings/v2/set', (req, res) => {
        //TODO: Get this to actually work.
        res.send("[]")
    })

    app.post('/api/players/v1/list', (req, res) => {
        res.send("[]")
    })

    app.post('/api/presence/v2/', (req, res) => {
        //TODO: Get this to actually work.
        res.send("[]")
    })
    
    app.listen(port, () => {
        console.log(`${chalk.green("[API]")} API started on port ${port}`)
    })
}

module.exports = { startAPI }