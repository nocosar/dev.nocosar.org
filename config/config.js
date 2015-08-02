'use strict';

/**
 * Module Dependencies
 */
var _ = require('lodash');

/**
 * Application Dependencies
 */
var defaultConfig = require('./default.js');
var envConfig = require('./env.js');

module.exports = _.merge(defaultConfig, envConfig);
