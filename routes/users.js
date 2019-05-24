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
  req.session.destroy(function(){
    req.session;
    });
    
  // req.logout();
  res.json({success: true, msg: 'signout success'});
});

// User withdrawal - 아직 구현 안됨.
router.delete('/wd', function(req, res){
  console.log(req.body);
  res.send('get /login');
});

router.get('/session', ensureAuthenticated, function(req, res) {
  // deserializeUser에서 추가로 저장한 정보까지 전달 받음
  let userInfo = req.user;
  // console.log(userInfo);
  res.json({
      type : 'info',
      message : 'true',
      userid : userInfo.userId,
      autoLogin : userInfo.autoLogin
  }); 
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { // 현재 session이 유효한 세션인가?
      // 유효 하므로 다음으로
      return next();
  }
  // 유효하지 않은 경우
  res.status(401);
  res.json({message : 'false'});
}

module.exports = router;
