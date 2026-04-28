const log = console.log;

log('Web Serverni boshlash');
const express = require('express');
const fs = require('fs');
const app = express();

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if(err) log("ERROR:", err);
//     else user = JSON.parse(data);
// })

// MongoDB call
// const db = require('./server').db();
const db = require("./server");

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
    console.log("user entered /create-item")
    log(req.body);
    const new_item = req.body.item;
    db.collection("plans").insertOne({item: new_item}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong")
        } else {
            res.end("successfully added")
        }
    })
})

app.get('/', function(req, res) {
    console.log("user entered /")
    db.collection("plans").find().toArray((err, data) => {
        if(err) {
            console.log(err)
            res.send("ERROR!")
        } else {
            res.render('plan', { items: data })
        }
    })
});

// app.get('/author', (req, res) => {
//     res.render("author", {user: user})
// })

// app.get('/about', function(req, res) {
//     res.end('My name is Muza');
// });

// app.get('/gift/stuff', function(req, res) {
//     res.end('siz sovgalar bolimidasiz');
// });

module.exports = app;