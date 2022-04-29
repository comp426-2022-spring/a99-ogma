/*const express = require('express');
//const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan')
var fs = require('fs')
const db = require("./database.js")
var md5 = require("md5");
const { aggregate } = require('./database.js');
//const { runInNewContext } = require('vm');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//const articleRouter = require('./routes/articles')
//app.use('/articles', articleRouter)
const cors = require('cors')
// Set up cors middleware on all endpoints
app.use(cors())
app.use(express.json())
app.use(express.static('./public')); */

/*mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')*/


const express = require('express');
const app = express();
const morgan = require('morgan')
var fs = require('fs')
const db = require("./database.js")
var md5 = require("md5");
const { aggregate } = require('./database.js');
// Add cors dependency
const cors = require('cors')
// Set up cors middleware on all endpoints
const bodyParser = require('body-parser')
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
const path = require('path');
const router = express.Router();
app.use(express.json())
app.use(express.static('./public'));


var args = require("minimist")(process.argv.slice(2), {
    int: ['port']
  })

const port = args.port || process.env.PORT || 5555;

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',port))
});

var user_name = "" // Gloabl var that is set with a vaild login


app.use((req, res, next) => {
    let logdata = {
        username: user_name,
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
    const stmt = db.prepare('INSERT INTO access (username, remoteaddr, remoteuser, time, method, url,  protocol, httpversion, secure, status, referer, useragent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    const info = stmt.run(logdata.username, logdata.remoteaddr.toString(), logdata.remoteuser, logdata.time, logdata.method.toString(), logdata.url.toString(), logdata.protocol.toString(), logdata.httpversion.toString(), logdata.secure.toString(), logdata.status.toString(), logdata.referer, logdata.useragent.toString())
    next()
})
const WRITESTREAM = fs.createWriteStream('access.log', { flags: 'a' })
    app.use(morgan('combined', { stream: WRITESTREAM }))
//App entry point
app.get('/app/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    }]
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.status(200);
    res.type('text/plain')
    res.redirect('http://localhost:5555/');

    //res.render('articles/index', {articles: articles})
  });
//Attempts to login a user
app.post('/app/login', (req, res) => {
    let data = {
        username: req.body.user,
        password: req.body.pass
    }
    try {
        if ((data.username == null) || (data.password == null)) {
            res.status(401).redirect('http://localhost:5555/login_page.html')
        }
        const stmt = db.prepare('SELECT * FROM usersinfo WHERE username = ? AND password = ?').get(data.username, data.password)
        user_name = data.username;
        console.log(stmt)
        if (stmt.username != null) {
        //console.log(user_name)
        res.status(200).redirect('http://localhost:5555/new_entry.html')
        }
        else {
            console.log("Invaild")
            res.status(401).redirect('http://localhost:5555/login_page.html')
        }
    }
    catch (e) {
        console.error(e)
        res.status(401).redirect('http://localhost:5555/login_page.html')
    }
})
//console.log(user_name)
//Sarika
//Creates a new user
app.post('/app/new_user', (req, res, next) =>{
    let data = {
        user: req.body.user,
        pass: req.body.pass,
        email: req.body.email
    }
    const stmt = db.prepare('INSERT INTO usersinfo (username, password, email) VALUES (?, ?, ?)')
    const info = stmt.run(data.user, data.pass, data.email)
    //const stmt1 = db.prepare('INSERT INTO usersinfo (username, password, email) VALUES (test1, test, test);')
    //console.log(stmt1)
    console.log("success")
    res.status(200).redirect('http://localhost:5555/login_page.html')
    //next();
}) 
//Gets user info if given vaild id
app.get('/app/accountinfo/debug', (req, res) =>{
    try {
    const stmt = db.prepare('SELECT * FROM usersinfo').all()
    //const entries = stmt.run(req.params.id).all()
    //console.log(stmt)
    res.status(200).send(stmt)
    //console.log("success")
    }
    catch (e) {
        console.error(e)
    }
}) 

app.get('/app/accountinfo/', (req, res) =>{
    try {
    const stmt = db.prepare('SELECT * FROM usersinfo WHERE username = ?').get(user_name)
    //const entries = stmt.run(req.params.id).all()
    //console.log(stmt)
    res.status(200).send(stmt)
    console.log("success")
    }
    catch (e) {
        console.error(e)
    }
}) 
//Jaycee
//Changes Username in database based on id given
app.post('/app/change_username', (req, res) =>{
    let data = {
        user: req.body.username
    }
    const stmt = db.prepare('UPDATE usersinfo SET username = COALESCE(?,username) WHERE username = ?')
    const info = stmt.run(data.user, user_name)

    //res.status(200).json(info)
    console.log("success")
    //user_name = data.user
    res.status(200).redirect('http://localhost:5555/index.html')
})
//Jaycee
//Changes password in database based on id given
app.post('/app/change_password', (req, res) => {
    let data = {
        pass: req.body.password
    }
    const stmt = db.prepare('UPDATE usersinfo SET password = COALESCE(?,password) WHERE username = ?')
    const info = stmt.run(data.pass, user_name)

    //res.status(200).json(info)
    console.log("success")
    //user_name = data.user
    console.log(data.pass)
    res.status(200).redirect('http://localhost:5555/index.html')
})
//Sarika
app.post('/app/delete_account', (req, res) => {
    const stmt = db.prepare('DELETE FROM usersinfo WHERE username = ?')
    const info = stmt.run(user_name)
    console.log("success")
    res.status(200).redirect('http://localhost:5555/bye.html')
})
//Anthony
//Retrieves all past entries based on user
app.get('/app/past_entries/', (req, res) => {
    const stmt = db.prepare('SELECT * FROM entrylogs WHERE username = ?').all(user_name)
    //const entries = stmt.run(req.params.user).all()
    res.status(200).json(stmt)
})
//Anthony
//Edits entry based on username and entry number
app.patch('/app/edit_entry/:user', (req, res) => {
    let data = {
        entry_number: req.body.entrynumber
    }
    const stmt = db.prepare('SELECT entry FROM entrylogs WHERE username = ? AND entrynumber = ?')
    const entry = stmt.run(req.params.user, data.entry_number)
    res.status(200).json(entry)
})
//Anthony
//Inserts new entry into database, and displays new entry
app.post('/app/new_entry/', (req, res, next) => {
    //const stmt1 = db.prepare('SELECT MAX(entrynumber) FROM entrylogs WHERE username = ?')
    //const next_entry = stmt1.run(user_name) + 1
    let data = {
        entry_rating: req.body.rating,
        new_entry: req.body.entry
    }
    const stmt2 = db.prepare('INSERT INTO entrylogs (username, rating, entry) VALUES (?,?,?)')
    const the_entry = stmt2.run(user_name, data.entry_rating, data.new_entry)
    console.log(data)
    res.status(200).redirect("http://localhost:5555/welcome_back.html")
})
//Default if endpoint cannot be found

app.use(function(req, res){
	res.json({"message":"Endpoint not found. (404)"});
    res.status(404);
})

//Radio button image meanings
const INPUTS = document.querySelectorAll('#smileys input');
const updateValue = e => document.querySelector('#result').innerHTML = e.target.value;

INPUTS.forEach(el => el.addEventListener('click', e => updateValue(e)));