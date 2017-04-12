var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var MovieSchema = mongoose.Schema({
  title : String,
  description : String,
  director : String,
  duration : String,
  poster : String
});

var Movie = mongoose.model('movies', MovieSchema, 'movies');

router.get('/', function(req, res){
  Movie.find({}, function(err, allMovies){
    if (err) {
      console.log('mongo error: ', err);
      res.sendStatus(500);
    }
    res.send(allMovies);
  });
});

router.post('/', function(req, res){

  var favorite = new Movie({
    title : req.body.details.Title,
    description: req.body.details.Plot,
    director: req.body.details.Director,
    duration: req.body.details.Runtime,
    poster: req.body.details.Poster
  });
  console.log(favorite);
  favorite.save(function(err, newFavorite){
    if (err) {
      console.log('save error: ', err);
    }
    console.log('saved: ', newFavorite);
    res.sendStatus(200);
  });

});



module.exports = router;
