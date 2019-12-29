const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  image: String
});


const Product = mongoose.model('products', productSchema)

module.exports = Product