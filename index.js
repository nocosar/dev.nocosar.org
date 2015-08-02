'use strict';

/**
 * Module dependencies.
 */
var app = require('./lib/express.js');
var clog = require('./lib/clog.js'); 
var config = require('./config/config.js');

var server = app.listen(config.port, function(err){
  if(err) {
    throw err;
  }
  clog.green('Listening on port: ' + config.port);
});
