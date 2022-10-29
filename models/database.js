const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DCollection = new Schema(
  {
<<<<<<< HEAD
    money: { rating: Number },
    collectables: [{
      collection_name: {type: String, require: true},
      amount: {rating: Number},
      collection_price: {rating: Number}
    }],
    operation: {type: String, require: true},
    
=======
    money: { money: Number },
    collectables: { collectables: [String], required: true }, //collection_name-amount adentro del [] collectables?
    operation: {type: String, require: true},
    collection_name: {type: String, require: true},
    amount: {amount: Number},
    collection_price: {collection_price: Number}
>>>>>>> 55207f66f8ab1e188d9237113156733b01e1beef
  },
  { timestamps: true }
);

module.exports = mongoose.model('dcolections', DCollection);