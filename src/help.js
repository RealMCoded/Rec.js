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

    rooms <roomName>        Allows you to download a room from RecNet and play with it in older versions!
                            Not providing any options prompts you to enter in names.
                            You can enter more than one name at a time to batch download rooms.
                            Modern Rooms won't work with this, Older ones will.
                            Example: rooms gribblytheater Gribbly.exe
    `)
}

module.exports = { run }