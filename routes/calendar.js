var express = require('express');
var router = express.Router();
var funCal = require('../function/calender/funCalendar');

/* calendar */
// writing
router.post('/am', function(req, res, next) {
    console.log("== calendar writing ==");
    funCal.userinfo(req, res, next);
});

// rewriting
router.put('/am', function(req, res, next) {
    res.send('Announcement');
});

// delete
router.delete('/am', function(req, res, next) {
    res.send('Announcement');
});

// ask
router.get('/am', function(req, res, next) {
    res.send('Announcement');
});

module.exports = router;
