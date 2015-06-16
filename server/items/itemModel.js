var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  itemName:  {
  	type: String,
  	required: true
  }
  purchaseDate: { 
  	type: Date, 
  	default: Date.now 
  },
  expirationDate: { 
  	type: Date, 
  	required: true,
  }
});

module.exports = mongoose.model('Item', ItemSchema);