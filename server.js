const log = console.log;

log('Web Serverni boshlash');

const express = require('express');
const http = require('http');

const app = express();

// 1: Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// 2: session code

// 3: Views code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4: Routing code
app.get('/', function(req, res) {
    res.end('<h1 style="background: red">hello world</h1>');
});

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