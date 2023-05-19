const inquirer = require("inquirer")

async function run(){
    const answers = await inquirer.prompt({
        name: 'options_main',
        type: 'list',
        message: 'What do you want to do?',
        choices: [
          'Run Server',
          'Edit settings',
          'Download Custom Room',
          'Exit'
        ],
    });

    switch(answers.options_main){
        case "Run Server": {return menu_serve()} break;
        case "Edit settings": {require("./config.js").run(true)} break;
        case "Download Custom Room": {require("./rooms.js").run(true)} break;
        case "Exit": {return console.log("\n👋 Bye!")} break;
    }
}

async function menu_serve(){
    const answers = await inquirer.prompt({
        name: 'options_serve',
        type: 'list',
        message: 'What version do you want to launch?',
        choices: [
          '2016',
          '2017',
          '2018',
          'Back'
        ],
    });

    switch(answers.options_serve){
        case "2016": {require("./serve.js").run("2016", undefined)} break;
        case "2017": {require("./serve.js").run("2017", undefined)} break;
        case "2018": {require("./serve.js").run("2018", undefined)} break;
        case "Back": {return run()} break;
    }
}

module.exports = { run }