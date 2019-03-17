var express = require('express');
var router = express.Router();


// User info
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// User login
router.get('/login', function(req, res){
  res.send('get /login');
});

// User 
router.get('/login', function(req, res){
  res.send('get /login');
});


module.exports = router;
