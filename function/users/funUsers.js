var express = require('express');
var router = express.Router();
var mysql_dbc = require('../../config/db_con')();
var connection = mysql_dbc.init();
var bcrypt = require('bcrypt');

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