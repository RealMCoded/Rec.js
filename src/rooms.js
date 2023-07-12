const chalk = require("chalk")
const inquirer = require("inquirer")
const fs = require("fs");

let return_to_ezmenu;

async function run(returnToEZmenu = false) {
    return_to_ezmenu = returnToEZmenu
    console.log(`${chalk.yellow("Rec.js Custom Room Downloader")}`)

    if (process.argv.length == 3) {return menu()}

    if (!return_to_ezmenu) {
        for(var i=3; i < process.argv.length; i++) {
            await downloadRoom(process.argv[i])
        }
        exit()
    }
    menu()
}

function exit(){
    if (return_to_ezmenu) {
        console.log("")
        require("./no-command.js").run()
    } else {
        console.log("👋 Bye!")
        process.exit(0)
    }
}

async function menu(){
    const answers = await inquirer.prompt({
        name: 'room',
        type: 'input',
        message: 'Enter the name of the room you want to download:'
    });
    
    if (answers.pfp != "") {
        await downloadRoom(answers.room)
    } else {
        console.log("❌ No room name specified!")
    }
    menuAgain()
}

async function menuAgain(){
    const answers = await inquirer.prompt({
        name: 'options_main',
        type: 'list',
        message: 'Do you want to download another room?',
        choices: [
          'Yes',
          'No'
        ],
    });

    switch(answers.options_main){
        case "Yes": {return menu()} break;
        case "No": {return exit()} break;
    }
}

async function downloadRoom(room_name) {
    await fetch(`https://rooms.rec.net/rooms?name=${room_name}&include=297`).then(res => res.json()).then(data => {
        if (data.title) {
            console.log(`${chalk.red("[ERROR]")} Invalid room name specified!`)
            return false;
        }
        fs.mkdirSync(`./user-info/rooms/${room_name}/`, { recursive: true });
        fs.writeFileSync(`./user-info/rooms/${room_name}/room.json`, JSON.stringify(data));
        console.log(`${chalk.green("[OK]")} Room "${room_name}" downloaded!`)
        return true;
    });
}

module.exports = { run }