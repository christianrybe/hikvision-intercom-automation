const https = require('https');
const shell = require('shelljs');
const fs = require('fs');
const basicAuth = require('express-basic-auth');
const privateKey  = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};
const app = require('express')();
const {INTERCOM_USER, INTERCOM_PASS} = process.env

app.use(basicAuth({
    users: { [INTERCOM_USER]: `${INTERCOM_PASS}` },
    challenge: true // <--- needed to actually show the login dialog!
}));

app.get('/', (req, res) => {
    res.writeHead(200);
    console.log("Received request at URL", req.url)
    shell.exec('./send_curl.sh')
    res.send("Automation triggered")
})

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(8008);
