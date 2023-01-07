const chalk = require("chalk")

function run(){
    console.log(`${chalk.yellow(`Rec.js Help`)}
    
Usage:  npm run [command] 
        yarn run [command]
        node . [command]

Example: npm run serve 2016
         yarn run serve 2016
         yarn serve 2016
         node . serve 2016
    
Valid commands:

    help                    Displays help information
                            NOTE: running "yarn help" will not run this.

    serve [version] <port>  Start the server for the version specified. 
                            If version is undefined, it will run the defaultVersion in config.json. 
                            The port is optional. It defaults to the year of the version you are running.
                            Example: serve 2016, serve 2016 8080

    config                  Edit your user and server configuration. 
                            NOTE: running "yarn config" will not run this.
    `)
}

module.exports = { run }