// var express = require('express');
var mysql_dbc = require('../../config/db_con')();
var connection = mysql_dbc.init();
var bcrypt = require('bcrypt');


const session = require('express-session');
// const FileStore = require('session-file-store')(session); 

fn = {}

// For testing database connections 
fn.userInfo =  function (req, res, next) {
  var sql = `SELECT * FROM customer_info WHERE _id = ?` ;  

  connection.query(sql,req.body.userId,function(err, result) {
    if(!err){
      if(bcrypt.compareSync(req.body.password, result[0].pw)){
        console.log('result value = ' + result);
        res.json({success: true, msg: 'password check success'});
      }else{
        res.json({success: false, msg: 'password check false'});
      }    
    } else {
      console.log('Error');
      res.render('index', {title:'Error'});
    }
  });
}

fn.checkPassword = function(req, res, next) {
  var sql = `SELECT * FROM customer_info WHERE _id = ?`;

  connection.query(sql,req.params.id,function(err, result) {
    if(!err){
       // console.log('get user infomation');
       console.log('result value = ' + result);
       res.send(result);
    } else {
      console.log('Error');
      res.render('index', {title:'Error'});
    }
  });

}

// userSignup
fn.userSignup = function (req, res, next) {
  var sql_insert = 'INSERT INTO customer_info (_id, name, pw, major, number, gender, phoneNum) VALUES(?,?,?,?,?,?,?)';
  var sql_check = 'SELECT * FROM `customer_info` WHERE `_id` = ?';
  const saltRounds = 5;

  var
   new_id = req.body._id,
   new_pw_hash = bcrypt.hashSync(req.body.pw, saltRounds),
   params = [new_id, req.body.name, new_pw_hash  ,req.body.major, req.body.number, req.body.gender, req.body.phoneNum];


   connection.query(sql_check, new_id, function (err, result) {
    // console.log(result._id);
     if (err) {
         console.log('err :' + err);
         return res.json({success: false, msg: err});
       }else {
         if (result.length != 0) {
           console.log('아이디 중복!' );
           return res.json({success: false,result: 'overlapping' ,msg: '존재하는 아이디 입니다.'});
         }
       }
       console.log('id check - pass');

    connection.query(sql_insert,params, function (err, result) {
      // console.log(new_pw_hash);
     if(err){
       console.log(err);
        res.json({success: false, msg: err});
      }
      else{
        console.log('새로운 아이디가 생성되었습니다. ==> ' + new_id);
        res.json({success: true, msg: 'signup success'});
      }
    });
  });
}



module.exports = fn;