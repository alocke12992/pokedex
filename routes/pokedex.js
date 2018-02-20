var express = require('express');
var router = express.Router();
var Pokemon = require('../models').Pokemon;

var pokemon = [
  {id: 1, dex: 001, name: "Bulbasaur"},
  {id: 2, dex: 004, name: "Charmander"},
  {id: 3, dex: 007, name: "Squirtle"}
]

/* GET pokemon listings. */
router.get('/', function(req, res) {
  Pokemon.all()
    .then( function(pokemon) {
      return res.render('pokedex', {pokemon:pokemon});
    })
});

module.exports = router;


/* POST add pokemon to your Dex */ 

router.post('/', function(req, res){
  var name = req.body.name;
  Pokemon.create({name: name })
    .then( function() {
      res.redirect('/pokedex')
    })
})