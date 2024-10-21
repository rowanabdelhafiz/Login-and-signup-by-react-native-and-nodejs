// models/User.js
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  PhoneNumber: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model('User', userSchema);
