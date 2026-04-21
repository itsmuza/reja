const log = console.log;

log('Web Serverni boshlash');

const express = require('express');
const http = require('http');
const fs = require('fs');
const app = express();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) log("ERROR:", err);
    else user = JSON.parse(data);
})

// 1: Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// 2: session code

// 3: Views code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4: Routing code
app.post('/create-item', (req, res) => {
    log(req.body);
    res.json({test: 'success'})
})

app.get('/', function(req, res) {
    // res.end('<h1 style="background: red">hello world</h1>');
    res.render('harid');
});

app.get('/author', (req, res) => {
    res.render("author", {user: user})
})

app.get('/about', function(req, res) {
    res.end('My name is Muza');
});

app.get('/gift/stuff', function(req, res) {
    res.end('siz sovgalar bolimidasiz');
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    log(`Sever is running successfully on port: ${PORT}`)
});
