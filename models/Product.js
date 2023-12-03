const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, ''],
    maxLength: [30, ''],
  },
  price: {
    type: Number,
    required: [true, ''],
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Product', productSchema);
