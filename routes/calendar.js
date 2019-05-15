var express = require('express');
var router = express.Router();
var funCal = require('../function/calendar/funCalendar');

/* calendar */
// writing
router.post('/am', function(req, res, next) {
    funCal.writeCalendar(req, res, next);
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
    funCal.getCalendarInfo(req,res,next);
});

module.exports = router;
