/* eslint prefer-destructuring: 0 */
// IMPORT LIBRARY
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// ARTIST SCHEMA - STORE INFORMATION ABOUT ARTIST
const artistSchema = new Schema({
  name: String,
  genre: String,
});

// VARIABLES EXPORTED
module.exports = mongoose.model('Artist', artistSchema);
