function decodeRequest(req){
    let body = '';
    req.setEncoding('utf8');
    req.on('data', (chunk) => {
        body += chunk;
    });
        
    //Not all data will be JSON. Add a fix for this later.
    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            // Write back something interesting to the user:
            console.log(`GOT STREAM "${body}"`)
            //res.end()
            return body;
        } catch (er) {
            // uh oh! bad json!
            console.log(er.message)
            return 0;
        }
    });
}

module.exports = { decodeRequest }