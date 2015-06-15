var express = require('express');
var mongoose = require('mongoose');

var app = express();

require('./config/middleware.js')(app, express);

// connect to mongoose database named fresh
mongoose.connect('mongodb://localhost/fresh');

module.exports = app;