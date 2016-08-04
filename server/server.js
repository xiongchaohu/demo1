/**
 * Created by hxc on 16-8-3.
 */

const express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.get('/query', function(req, res) {
    res.send(req.query);
});

app.get('/params/:name', function (req, res) {
    res.send(req.params);
});

app.post('/json', function (req, res) {
    console.log(req.headers)
    res.send(req.body);
});

app.post('/form', function (req, res) {
    res.send(req.body);
});

app.post('/header',function(req,res){
    res.send(req.header('name'));
})

app.listen(3000, function () {
    console.log('example app Listening on port 3000!');
});