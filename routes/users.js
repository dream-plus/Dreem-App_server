var express = require('express');
var router = express.Router();
var passport = require('passport');
var funUsers = require('../function/users/funUsers');

// User info
router.get('/info/:id', function(req, res, next) {
  console.log("get userid " + req.params.id);
  // funUsers.userSession(req, res, next);
  funUsers.userInfo(req, res, next);
  // res.send(test);
});

// User signup
router.post('/signup', function(req, res,next){
  console.log(req.body);
  funUsers.userSignup(req, res, next);
  // res.json({success: true, msg: 'signup success'});
});

// User signin
router.post('/signin', passport.authenticate('local-signin',{
  failureRedirect: '/users/signin', failureFlash: true
}),function(req, res){
  console.log('ID : '+ req.body.username);
  console.log('******* signin *******');
  res.json({success: true, msg: 'signin success'});
});

// 로그인 false 시 값 보내주는곳
router.get('/signin', function (req,res) {
  console.log('signin false');
  res.json({success: false, msg: 'signin false'});
});

// User signout
router.get('/signout', function (req,res){
  req.logout();
  res.json({success: true, msg: 'signout success'});
});

// User withdrawal - 아직 구현 안됨.
router.delete('/wd', function(req, res){
  console.log(req.body);
  res.send('get /login');
});

module.exports = router;
