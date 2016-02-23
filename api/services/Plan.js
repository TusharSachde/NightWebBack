var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: String
  description: String,
  modificationTime: Date
});

module.exports = mongoose.model('Plan', schema);
var models = {};

module.exports = _.assign(module.exports, models);
