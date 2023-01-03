async function decodeRequest(req){
    let json = new Promise(function(resolve) {
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
                //console.log(`GOT STREAM "${body}"`)
                //res.end()
                resolve(data)
            } catch (er) {
                // uh oh! bad json!
                console.log(er.message)
                return 0;
            }
        });
    })
    return json;
}

module.exports = { decodeRequest }