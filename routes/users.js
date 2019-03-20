var express = require('express');
var router = express.Router();
var funUsers = require('../function/users/funUsers');

// User info
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// User signup
router.post('/signup', function(req, res){
  console.log(req.body);
  funUsers.userSignup(req, res, next);
  // res.json({success: true, msg: 'signin success'});
});

// User signin
router.post('/signin', function(req, res){
  console.log(req.body);
  res.send('get /login');
});

// User delete
router.delete('/wd', function(req, res){
  console.log(req.body);
  res.send('get /login');
});

module.exports = router;
