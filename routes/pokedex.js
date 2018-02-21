var express = require('express');
var router = express.Router();
var Pokemon = require('../models').Pokemon;

/* GET pokemon listings. */
router.get('/', function(req, res) {
  Pokemon.all({
    order: [
      ['createdAt', 'ASC']
    ]
  }) 
    .then( function(pokemon) {
      return res.render('pokedex', {pokemon: pokemon});
    })
});

module.exports = router;


/* POST add pokemon to your Dex */ 

router.post('/', function(req, res){
  var name = req.body.name;
  var type = req.body.type;
  var hp = req.body.hp;
  Pokemon.create({ name: name, type:type, hp:hp })
    .then( function() {
      res.redirect('/pokedex')
    })
})

/* DELETE Pokemon from your dex */ 

router.delete('/:id', function(req,res) {
  Pokemon.findById(req.params.id)
    .then( function(pokemon) {
      pokemon.destroy()
    }) 
    .then( function() {
      return res.redirect('/pokedex'); 
  });
});

/* EDIT pokemon currently in your dex */ 

router.get('/:id/edit', function (req, res) {

  Pokemon.findById(req.params.id)
    .then( function (pokemon) {
      return res.render('edit', { pokemon: pokemon });
    });
});

router.put('/:id', function (req, res) {
  Pokemon.update(
    { name: req.body.name, type: req.body.type, hp: req.body.hp },
    { where: { id: req.params.id } }
  )
    .then(function () {
      return res.redirect('/pokedex');
    })
});