const chalk = require("chalk")
const inquirer = require("inquirer")
const fs = require("node:fs")

let player, server;

async function run() {
    console.log(`${chalk.yellow("RecNet.js Config Utility")}`)

    player = JSON.parse(fs.readFileSync("./user-info/user.json"))

    //server = JSON.parse(fs.readFileSync("./config.json"))

    mainMenu()
}

function saveExit(){
    fs.writeFileSync("./user-info/user.json", JSON.stringify(player))
    console.log("Wrote player config to file.\n👋 Bye!")
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
        case "Edit server settings": {console.log("Will be added later!"); return mainMenu()} break;
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
          'Back'
        ],
    });

    switch(answers.options_user){
        case "Change username": {return set_name()} break;
        case "Change token amount": {return set_token()} break;
        case "Change level": {return set_level()} break;
        case "Back": {return mainMenu()} break;
    }
}

async function menu_server(){
    const answers = await inquirer.prompt({
        name: 'options_server',
        type: 'list',
        message: 'Edit server settings',
        choices: [
          'Back'
        ],
    });

    switch(answers.options_user){
        case "Back": {return mainMenu()} break;
    }
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

module.exports = { run }