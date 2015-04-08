var mongoose = require('mongoose');



module.exports = mongoose.model('Details', {
  name: String,
  model: String,
  year: String,
  mileage: String,
  condition: String,
  description: String,
  url_name: String,
  brand: String,
  hd: String,
  Length: String,
  Width: String,
  Height: String,
  Price: String,
  diag_length: String,
  warranty: String,
  polish_type: String,
  finishes: String,
  type: String
});