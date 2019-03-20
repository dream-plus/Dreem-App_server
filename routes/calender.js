var express = require('express');
var router = express.Router();

/* calender */
// writing
router.post('/am', function(req, res, next) {
    res.send('Announcement');
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
