'use strict';

var config = {};

// Set Port if not defined in process.env
config.port = process.env.PORT || 8888;

// Set Enviorment if not nefined in process.env
config.env = process.env.NODE_ENV || 'dev';

// Configure the RethinkDB Database
config.db = {};
config.db.host = 'localhost';
config.db.port = 28015;
config.db.authKey = '';
config.db.db = 'nocosar';

// Express Local Config
config.locals = {};
config.locals.title = 'NoCo SAR/ESS';

// Export the Config Object
module.exports = config;
