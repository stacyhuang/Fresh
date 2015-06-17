var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ListSchema = new Schema({
  itemName:  {
  	type: String,
  	required: true
  }
});

module.exports = mongoose.model('List', ListSchema);