const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String
});


const User = mongoose.model('users', userSchema)

module.exports = User