const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const { Photos } = require('./database/seed.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser());

app.get('/test', (req, res) => {
    // console.log("get request 8:37")
    Photos.findAll().then(photos => res.send(photos))
    // res.send("hello 8:43")
    // console.log("test from server")
});

app.listen(port, () => console.log(`Listenin' on ${port}...`));

module.exports = app;
