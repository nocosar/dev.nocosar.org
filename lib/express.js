'use strict';

/**
 * Module Dependencies
 */
var consolidate = require('consolidate');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var r = require('rethinkdb');

/**
 * App Dependencies
 */
var config = require('../config/config.js');
var rethinkdb = require('./rethinkdb.js');
var util = require('./utils.js');

// Create the Express Instance
var app = express();

// Add Local Variables to app
util.initLocals(app);

// Use Morgan Logger in Development Env
if(config.env === 'dev') {
  app.use(morgan('dev')); 
}

// Set swig as the template engine
app.engine('view.server.html', consolidate['swig']);

// Set views path and view engine
app.set('view engine', 'view.server.html');
app.set('views', './');

// Add the RethinkDB as an Express Middleware
app.use(rethinkdb.createConnection);

// Static Routing
app.use('/public', express.static(path.resolve('./public')));
app.use('/modules/core/client', express.static(path.resolve('./modules/core/client')));

// Add the Routes
require('../modules/core/server/routes/core.routes.server.js')(app);

module.exports = app;
