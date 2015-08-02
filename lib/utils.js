'use strict';

/**
 * Module Dependencies
 */
var _ = require('lodash');

/**
 * Application Dependencies
 */
var config = require('../config/config.js');

exports.initLocals = function(app) {
  for(var key in config.locals) {
    app.locals[key] = config.locals[key];
  }

  app.use(this.initUrlLocals);
};

exports.initUrlLocals = function (req, res, next) {
  res.locals.host = req.protocol + '://' + req.hostname;
  res.locals.url = req.protocol + '://' + req.headers.host + req.originalUrl;
  next();
};
