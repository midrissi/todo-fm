/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const { resolve } = require('path');

// eslint-disable-next-line import/no-dynamic-require
const config = require(resolve('./config'));

const {
  Schema,
} = mongoose;

const TodoSchema = new Schema({
  name: String,
  done: Boolean,
}, {
  timestamps: config.lib.mongoose.timestamps,
});

module.exports = mongoose.model('Todo', TodoSchema);
