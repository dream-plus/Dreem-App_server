var express = require('express');
var router = express.Router();

fn = {}
// userSignup
fn.userSignup =  function (req, res, next) {
    var sql = 'SELECT * FROM customer_info' ;
  
    connection.query(sql,function(err, result) {
      if(!err){
        res.send(result);
      } else {
        console.log('Error');
        res.render('index', {title:'Error'});
      }
    });
  }

module.exports = fn;