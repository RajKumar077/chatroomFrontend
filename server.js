const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + '/build/'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});
app.get('/createevent', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});
app.get('/findevent', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'))
});

app.listen(process.env.PORT || 8080);