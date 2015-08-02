'use strict';

var r = require('rethinkdb');

var config = require('../config/config.js');

exports.createConnection = function(req, res, next) {
  r.connect(config.db, function(error, conn) {
    if (error) {
      handleError(res, error);
    }
    else {
      // Save the connection in `req`
      req._rdbConn = conn;
      // Pass the current request to the next middleware
      next();
    }
  });
};
