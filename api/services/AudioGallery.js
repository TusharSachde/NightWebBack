var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  title: String,
  audio: String,
  order: Number,
  modificationTime: Date,
  category: { type: Schema.Types.ObjectId, ref: 'AudioGalleryCategory' },
  status: Number
});

module.exports = mongoose.model('AudioGallery', schema);
var models = {};

module.exports = _.assign(module.exports, models);
