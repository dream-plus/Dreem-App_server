var express = require('express');
var mysql_dbc = require('../../config/db_con')();
var connection = mysql_dbc.init();
var bcrypt = require('bcrypt');
// connection to databases
mysql_dbc.test_open(connection);


const session = require('express-session');
const FileStore = require('session-file-store')(session); 

fn = {}

// For testing database connections 
fn.usertest =  function (req, res, next) {
  var sql = 'SELECT * FROM customer_info' ;  

  connection.query(sql,function(err, result) {
    if(!err){
      console.log('good!!');
      res.send(result);
    } else {
      console.log('Error');
      res.render('index', {title:'Error'});
    }
  });
}

// check user session
fn.userSession = function( req, res, next){
  console.log(req.session);

  if(!req.session.num){
    req.session.num = 1;
  } else {
    req.session.num = req.session.num + 1;
  }
  res.send(`Number : ${req.session.num}`);

}

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