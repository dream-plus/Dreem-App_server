var express = require('express');
var router = express.Router();
var funUsers = require('../function/users/funUsers');

// test only
let test = {};

// User info
router.get('/', function(req, res, next) {
  console.log(test)
  // funUsers.userSession(req, res, next);
  funUsers.usertest(req, res, next);
  // res.send(test);
});

// User signup
router.post('/signup', function(req, res){
  console.log(req.body);
  // funUsers.userSignup(req, res, next);
  test = req.body;
  res.json({success: true, msg: 'signup success'});
});

// User signin
router.post('/signin', function(req, res){
  console.log(req.body);
  test = req.body;
  res.json({success: true, msg: 'signin success'});
});

// User delete
router.delete('/wd', function(req, res){
  console.log(req.body);
  res.send('get /login');
});

module.exports = router;
