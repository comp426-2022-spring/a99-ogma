const express = require('express');
const app = express();
const morgan = require('morgan')
var fs = require('fs')
const db = require("./database.js")
var md5 = require("md5");
const { aggregate } = require('./database.js');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var args = require("minimist")(process.argv.slice(2), {
    int: ['port']
  })

const port = args.port || process.env.PORT || 5555;

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
});

app.use((req, res, next) => {
    let logdata = {
        remoteaddr: req.ip,
        remoteuser: req.user,
        time: Date.now().toString(),
        method: req.method,
        url: req.url,
        protocol: req.protocol,
        httpversion: req.httpVersion,
        secure: req.secure,
        status: res.statusCode,
        referer: req.headers['referer'],
        useragent: req.headers['user-agent']
    }
    const stmt = db.prepare('INSERT INTO accesslog (remoteaddr, remoteuser, time, method, url,  protocol, httpversion, secure, status, referer, useragent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    const info = stmt.run(logdata.remoteaddr.toString(), logdata.remoteuser, logdata.time, logdata.method.toString(), logdata.url.toString(), logdata.protocol.toString(), logdata.httpversion.toString(), logdata.secure.toString(), logdata.status.toString(), logdata.referer, logdata.useragent.toString())
    next()
})
const WRITESTREAM = fs.createWriteStream('access.log', { flags: 'a' })
    app.use(morgan('combined', { stream: WRITESTREAM }))

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.status(200);
    res.type('text/plain')
    res.send(res.statusCode + ' ' + res.statusMessage);
  });

app.get('/app/login', (req, res) => {

})
//Sarika
app.get('/app/new_user', (req, res) =>{

}) 

app.get('/app/accountinfo/:user', (req, res) =>{

}) 
//Jaycee
app.get('/app/change_username/:user', (req, res) =>{

})
//Jaycee
app.get('/app/change_password/:user', (req, res) => {

})
//Sarika
app.get('/app/delete_account/:user', (req, res) => {

})
//Anthony
app.get('/app/past_entries/:user', (req, res) => {

})
//Anthony
app.get('/app/edit_entires/:user', (req, res) => {

})
//Anthony
app.get('/app/new_entry/:user', (req, res) => {

})
