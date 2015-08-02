'use strict';

module.exports = function(app) {

  var core = require('../controllers/core.controllers.server.js')

  app.route('/').get(core.renderIndex);
  
};
