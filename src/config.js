const chalk = require("chalk")
const inquirer = require("inquirer")
const fs = require("node:fs");

let player, server;

let pfpSettings = {
    change: false,
    location: ""
};

async function run() {
    console.log(`${chalk.yellow("Rec.js Config Utility")}`)
    player = JSON.parse(fs.readFileSync("./user-info/user.json"))
    server = JSON.parse(fs.readFileSync("./config.json"))
    mainMenu()
}

function saveExit(){
    fs.writeFileSync("./user-info/user.json", JSON.stringify(player))
    console.log("✅ Wrote player config to file.")
    console.log("✅ Wrote server config to file.")
    if (pfpSettings.change) {
        try {
            fs.copyFileSync(pfpSettings.location, "./user-info/ProfileImage.png")
            console.log("✅ Profile image changed.")
        } catch(e) {
            console.log(`❌ Error changing profile image. ${e.message}`)
        }
    }
    console.log("👋 Bye!")
    process.exit(0)
}

/*
    MENUS
*/

async function mainMenu(){
    const answers = await inquirer.prompt({
        name: 'options_main',
        type: 'list',
        message: 'What do you want to do?',
        choices: [
          'Edit user settings',
          'Edit server settings',
          'Save and exit',
          'Exit without saving'
        ],
    });

    switch(answers.options_main){
        case "Edit user settings": {return menu_user()} break;
        case "Edit server settings": {return menu_server()} break;
        case "Save and exit": {return saveExit()} break;
        case "Exit without saving": {return console.log("\n👋 Bye!")} break;
    }
}

async function menu_user(){
    const answers = await inquirer.prompt({
        name: 'options_user',
        type: 'list',
        message: 'Edit user settings',
        choices: [
          'Change username',
          'Change token amount',
          'Change level',
          'Change profile image',
          'Back'
        ],
    });

    switch(answers.options_user){
        case "Change username": {return set_name()} break;
        case "Change token amount": {return set_token()} break;
        case "Change level": {return set_level()} break;
        case "Change profile image": {return set_img()} break;
        case "Back": {return mainMenu()} break;
    }
}

async function menu_server(){
    const answers = await inquirer.prompt({
        name: 'options_server',
        type: 'list',
        message: 'Edit server settings',
        choices: [
          `Default build to launch`,
          `Toggle private rooms`,
          `Toggle developer info`,
          'Back'
        ],
    });

    switch(answers.options_server){
        case "Default build to launch": {return set_autolaunch()} break;
        case "Toggle private rooms": {return toggle_private()} break;
        case "Toggle developer info": {return toggle_dev()} break;
        case "Back": {return mainMenu()} break;
    }
}

async function set_autolaunch(){
    const answers = await inquirer.prompt({
        name: 'options_autolaunch',
        type: 'list',
        message: 'Select what version you wish to auto launch',
        choices: [
          `2016`,
          `2017`
          //`2018`,
        ],
    });
    
    server.defaultVersion = answers.options_autolaunch
    menu_server()
}

/*
    TOGGLE OPTIONS
*/

async function toggle_private(){
    server.privateRooms = !server.privateRooms
    console.log(`Setting changed to ${server.privateRooms}`)
    menu_server()
}

async function toggle_dev(){
    server.showDevInfo = !server.showDevInfo
    console.log(`Setting changed to ${server.showDevInfo}`)
    menu_server()
}

/*
    STRING INPUT OPTIONS
    TODO: Rewrite this to use a single function?
*/

async function set_name(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Enter your new username:',
        default() {
            return player.username;
        },
    });
    
    player.username = answers.player_name;
    menu_user()
}

async function set_token(){
    const answers = await inquirer.prompt({
        name: 'tokens',
        type: 'input',
        message: 'Enter your new token amount:',
        default() {
            return player.tokens;
        },
    });
    
    player.tokens = parseInt(answers.tokens);
    menu_user()
}

async function set_level(){
    const answers = await inquirer.prompt({
        name: 'level',
        type: 'input',
        message: 'Enter your new account level:',
        default() {
            return player.level;
        },
    });
    
    player.level = parseInt(answers.level);
    menu_user()
}

async function set_img(){
    console.log(`
    ⚠️Before you change your profile picture:⚠️
    - You can only use images that are on your computer. Images from the internet will throw an error!
    - All images must be in the "png" format.
    - You can drag and drop an image to get it's location automatically.
    - Enter nothing to abort this change.
    `)
    const answers = await inquirer.prompt({
        name: 'pfp',
        type: 'input',
        message: 'Enter the new location of your profile image:'
    });
    
    if (answers.pfp != "") {
        if (!answers.pfp.endsWith(".png")) {
            console.log("❌ Your image is not a PNG!")
        } else {
            pfpSettings.change = true
            pfpSettings.location = answers.pfp
        }
    } else {console.log("❌ No image provided. Profile picture will not be changed.")}
    menu_user()
}

module.exports = { run }