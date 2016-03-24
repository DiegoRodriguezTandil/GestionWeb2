'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  name: { type: String, trim: true },
  cuit: { type: String, trim: true },
  cuitType: { type: Schema.Types.ObjectId, ref: 'CuitType' },
  active: { type: Boolean, dafault: true },
  updated: { type: Date, default: Date.now },
  address: {
      street: String,
      number: Number,
      dpto: Number,
      city: { type: String, trim: true },
      zip: { type: String, trim: true }
  }    
});

module.exports = mongoose.model('Customer', CustomerSchema);
