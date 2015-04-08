/*var Meetup = require('../models/meetup');

module.exports.create = function (req, res) {
  var meetup = new Meetup(req.body);
  meetup.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Meetup.find({}, function (err, results) {
    res.json(results);
  });
}*/


var Details = require('../models/meetup');

module.exports.create = function (req, res) {
  var details = new Details(req.body);
  console.log(details);
  details.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Details.find({name:"Ferrari"}, function (err, results) {
    res.json(results);
  });
}