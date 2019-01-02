//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var MeasurementSchema = new Schema({
  sourceId: String,
  eventType: String,
  time: Date,
  severity = String,
  seqnumber = Object,
  data = Number
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Measurement', MeasurementSchema );