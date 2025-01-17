const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  dob: String,
  email: String,
  nationality: String,
  occupation: String,
  annual_income: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
