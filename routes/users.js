var express = require('express');
var router = express.Router();


// User info
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// User signup
router.post('/signup', function(req, res){
  res.send('get /login');
});

// User signin
router.post('/signin', function(req, res){
  res.send('get /login');
});

// User delete
router.delete('/wd', function(req, res){
  res.send('get /login');
});

module.exports = router;
