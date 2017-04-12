var mongoose = require('mongoose');
var mongoURI = 'mongodb://moo:worm@ds159330.mlab.com:59330/moviecollection';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('Mongo Connection Error: ' + err);
});

MongoDB.once('open', function(){
  console.log('Connected to Mongo');
});

module.exports = MongoDB;
