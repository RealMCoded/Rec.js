const fs = require("fs")

async function setPFP(req){
    //TODO: Figure out how to remove the header information from the request.
    var f=fs.createWriteStream(`./images/${Math.floor(Date.now() / 1000)}.png`);

    req.on('data', (chunk) => {
        f.write(chunk);
    });

    req.on('end', () => {
        f.end();
        return;
    });
}

module.exports = { setPFP }