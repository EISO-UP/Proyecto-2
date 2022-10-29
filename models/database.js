const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DCollection = new Schema(
  {
    money: { rating: Number },
    collectables: [{
      collection_name: {type: String, require: true},
      amount: {rating: Number},
      collection_price: {rating: Number}
    }],
    operation: {type: String, require: true},
    
  },
  { timestamps: true }
);

module.exports = mongoose.model('dcolections', DCollection);