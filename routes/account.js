var express = require('express');
var router = express.Router();
var funAccount = require('../function/accountBook/funAccount');

// call to db infor
router.get('/call/:id', function(req, res, next) {
    funAccount.accountCall(req, res, next);
});

// insert to account data
router.post('/add', function(req, res, next) {
    console.log(req.body);
    funAccount.accountAdd(req, res, next);
});

module.exports = router;