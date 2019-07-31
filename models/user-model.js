const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema.
const userSchema = new Schema({
    username: String,
    google_id: String,
    thumbnail: String
});

//Create an instance using schema
const User = mongoose.model('user', userSchema);

module.exports = User;