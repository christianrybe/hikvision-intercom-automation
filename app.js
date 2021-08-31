const https = require('https');
const shell = require('shelljs');
const fs = require('fs');
const basicAuth = require('express-basic-auth');
const privateKey  = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};
const app = require('express')();
const {INTERCOM_USER, INTERCOM_PASS, INTERCOM_PORT} = process.env

let optiosn = {
    users: { [INTERCOM_USER]: `${INTERCOM_PASS}` },
    challenge: true // <--- needed to actually show the login dialog!
};

console.log(optiosn)
app.use(basicAuth(optiosn));

app.get('/', (req, res) => {
    console.log("Received request at URL", req.url)
    shell.exec('./send_curl.sh')
    res.send("Automation triggered")
})

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(parseInt(INTERCOM_PORT));
