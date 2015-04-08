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


var Details = require('../models/details');

module.exports.create = function (req, res) {
  var details = new Details(req.body);
  console.log("det"+details);
  details.save(function (err, result) {
    res.json(result);
  });
}



module.exports.rolls = function (req, res) {
  
  Details.aggregate({$group:{_id:"$type"}}, function (err, results) {
    
    res.json(results);


  });
}

module.exports.list = function (req, res) {
  //console.log(req.params);
  Details.find({type:req.params.car}, function (err, results) {
    //console.log(req.params) ;
    res.json(results);


  });

}

module.exports.desc = function (req, res) {
  //console.log(req.params.description);
  Details.find({name:req.params.description}, function (err, results) {
    //console.log(req.params) ;
    res.json(results);


  });

}

module.exports.front = function (req, res) {
  console.log("hello");
  Details.find({}, function (err, results) {
    //console.log(req.params) ;
    res.json(results);
    console.log(results);


  });

}



 