var mongoose = require('mongoose');
var Schema = mongoose.Schema;

id
user
name
email
contact
subject
query


var schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  name: String,
  email: String,
  contact: String,
  subject: String,
  query: String,
});

module.exports = mongoose.model('Suggestion', schema);
var models = {};

module.exports = _.assign(module.exports, models);
