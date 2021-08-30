const https = require('https');const shell = require('shelljs');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const port = 8008;

https.createServer(options, function (req, res) {
    res.writeHead(200);
    console.log("Received request at URL", req.url)
    shell.exec('./send_curl.sh')
    res.end("Automation triggered");
}).listen(port);
