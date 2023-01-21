const chalk = require('chalk') // colored text
const express = require('express') //express.js - the web server
const morgan = require('morgan') //for webserver output
const app = express()
const path = require("path")
app.use(morgan(`${chalk.magenta("[CDN]")} :method ":url" :status - :response-time ms`))
const { ports } = require("../../config.json")

let port;

function start(serveport = ports.IMG){
    try {
        port = serveport
        serve()
    } catch(e) {
        console.error(e)
    }
}

function serve() {
    app.get('/', (req, res) => {
        res.redirect("https://realmcoded.github.io/Rec.js/port-in-use.html")
    })

    /*
        TODO: Make this send proper images later. 
    */

    app.get('//img/*', (req, res) => {
        //This sends the users PFP as a response
        res.sendFile(path.resolve(`${__dirname}/../../user-info/ProfileImage.png`))
    })
    
    app.listen(port, () => {
        console.log(`${chalk.magenta("[CDN]")} CDN started on port ${port}`)
    })
}

module.exports = { start }