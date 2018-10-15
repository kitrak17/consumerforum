var async = require('async');
var dbModel = require('../models/dbModel.js');


formatValidationErrors = function(error) {
    var last_param = '';
    var errors = new Array();
    var j = 0;
    for (var i = 0, len = error.length; i < len; i++) {
      if(error[i].param != last_param) {
        errors[j] = error[i];
        j++;
      }
      last_param = error[i].param; 
    }
    return errors;
  }

  getLocationIds = function(address, callback) {
    callback();
  }

  module.exports = {
    dbModel : dbModel,
    async   : async
  }