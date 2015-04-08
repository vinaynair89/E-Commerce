var mongoose = require('mongoose');

/*
module.exports = mongoose.model('Meetup', {
  name: String
*/

module.exports = mongoose.model('Details', {
  name: String,
  model: String,
  year: String,
  mileage: String,
  condition: String,
  description: String,
  url_name: String
});