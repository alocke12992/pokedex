var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'https://fontmeme.com/permalink/180221/107c7feb0395c97d7f094e2a94ccb4b2.png' });
});

module.exports = router;
