﻿require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

// Note: The port 8080 is also working on Azure with HTTPS enabled on Azure
var http = require('http');
var port = process.env.PORT || 443;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// Just a test for localhost:4000/test granted in jwt.js !
app.get('/test', function (req, res) {
    res.send('Hello World!');
   // console.log('Test');
 })

 

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/persons', require('./persons/persons.controller'));

// global error handler
app.use(errorHandler);


app.listen(port, function(){
	console.log('Server running at port 443')
})
