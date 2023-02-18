const fs = require("fs")

async function setPFP(req){
    var bufferHeader=0;

    var f=fs.createWriteStream(`./images/${Math.floor(Date.now() / 1000)}.png`);

    req.on('data', (chunk) => {
        // We only want to remove the header data one time
        if (bufferHeader == 0) {
            const slicedBuffer = Buffer.alloc(chunk.length - 141);
            chunk.copy(slicedBuffer, 0, 141);
            f.write(slicedBuffer)
            bufferHeader=1;
        } else {
            f.write(chunk)
        }
    });

    req.on('end', () => {
        f.end();
        return;
    });
}

module.exports = { setPFP }