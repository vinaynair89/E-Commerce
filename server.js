var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    detailsController = require('./server/controllers/details-controller');


mongoose.connect('mongodb://localhost:27017/CarDetails');

app.use(bodyParser());

app.get('/', function (req, res) {
  console.log("going home");
  res.sendfile(__dirname + '/client/views/home.html');
});

app.get('/home', function (req, res) {
  res.sendfile(__dirname + '/client/views/home.html');
});


app.get('/header', function (req, res) {
  res.sendfile(__dirname + '/client/views/header.html');
});

app.get('/footer', function (req, res) {
  res.sendfile(__dirname + '/client/views/footer.html');
});



app.get('/:car',function (req, res) {
  //console.log(req.params);
  res.sendfile(__dirname + '/client/views/car.html');
  ///console.log(user);
  //console.log(req.params.page);
  //res.render({user:req.params});
  //console.log(user);
  var user=req.params;
});

app.get('/car/:description',function (req, res) {
  //console.log(req.params);
  res.sendfile(__dirname + '/client/views/description.html');
  ///console.log(user);
  //console.log(req.params.page);
  //res.render({user:req.params});
  //console.log(user);
  var user=req.params;
});

app.get('/nailpolish/:description',function (req, res) {
  //console.log(req.params);
  res.sendfile(__dirname + '/client/views/description.html');
  ///console.log(user);
  //console.log(req.params.page);
  //res.render({user:req.params});
  //console.log(user);
  var user=req.params;
});

app.get('/television/:description',function (req, res) {
  //console.log(req.params);
  res.sendfile(__dirname + '/client/views/description.html');
  ///console.log(user);
  //console.log(req.params.page);
  //res.render({user:req.params});
  //console.log(user);
  var user=req.params;
});


app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/images', express.static(__dirname + '/client/images'));
//REST API
//app.get('/:page', detailsController.list);
app.get('/api/home', detailsController.front);
app.get('/api/details', detailsController.rolls);
app.get('/api/:car', detailsController.list);
app.get('/api/car/:description', detailsController.desc);
app.get('/api/nailpolish/:description', detailsController.desc);
app.get('/api/television/:description', detailsController.desc);




app.listen(3000, function() {
  console.log('I\'m Listening...');
})