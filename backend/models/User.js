const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  nationality: { type: String, required: true },
  occupation: { type: String, required: true },
  annual_income: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
