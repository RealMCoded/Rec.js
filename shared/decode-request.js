async function decodeRequest(req){
    let data = new Promise(function(resolve) {
        let body = '';
        req.setEncoding('utf8');
        req.on('data', (chunk) => {
            body += chunk;
        });
            
        //Not all data will be JSON. Add a fix for this later.
        req.on('end', () => {
            try {
                //const data = JSON.parse(body);
                resolve(body)
            } catch (er) {
                // uh oh! bad json!
                console.log(er.message)
                return 0;
            }
        });
    })
    return data;
}

module.exports = { decodeRequest }