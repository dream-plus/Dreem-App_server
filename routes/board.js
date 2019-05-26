var express = require('express');
var router = express.Router();
var funBoard = require('../function/board/funBoard');

/* board Announcement */
// writing
router.post('/am', function(req, res, next) {
    console.log(req.body);
    funBoard.board1Write(req, res, next);
});

// ask
router.get('/am', function(req, res, next) {
    funBoard.board1Pasing(req, res, next);
});

// delete
router.delete('/am', function(req, res, next) {
    res.send('Announcement');
});


/* board free */
// writing
router.post('/free', function(req, res, next) {
    funBoard.board2Write(req, res, next);
});

// ask
router.get('/free', function(req, res, next) {
    funBoard.board2Pasing(req, res, next);
});

// delete
router.delete('/free', function(req, res, next) {
    res.send('Announcement');
});


/* board QnA */
// writing
router.post('/qna', function(req, res, next) {
    funBoard.board3Write(req, res, next);
});

// ask
router.get('/qna', function(req, res, next) {
    funBoard.board3Pasing(req, res, next);
});

// delete
router.delete('/qna', function(req, res, next) {
    res.send('Announcement');
});


module.exports = router;
