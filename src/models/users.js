const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    contact: Number,
    email: String
    password: String,
    confirmPass: String
})