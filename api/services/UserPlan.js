var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  plan: {
    type: Schema.Types.ObjectId,
    ref: "Plan"
  },
  status: String,
  transactionid: String,
  startTime: Date,
  endTime: Date,
  url: String,
  json: Schema.Types.Mixed
  modificationTime: Date
});

module.exports = mongoose.model('UserNotification', schema);
var models = {};

module.exports = _.assign(module.exports, models);
