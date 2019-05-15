/*
*   
*/
var mysql_dbc = require('../../config/db_con')();
var connection = mysql_dbc.init();

fn = {}

// insert to database
fn.writeCalendar =  function (req, res, next) {

    var sql_insert = 'INSERT INTO calendar_info (_id, name, title, contents, date, time, place, public, notice, member) VALUES(?,?,?,?,?,?,?,?,?,?)' ;
    params = [req.body._id, req.body.name, req.body.title, req.body.contents, req.body.date, req.body.time, req.body.place, req.body.public, req.body.notice, req.body.member ];

    connection.query(sql_insert,params,function(err, result) {
      if(!err){
        console.log(err);
        res.json({success: false, msg: err});
      } else {
        console.log('달력에 내용이 추가 되었습니다.');
          res.json({success: true, msg: 'add success'});
      }
    });
  }

  fn.getCalendarInfo =  function (req, res, next) {

    var sql = `SELECT * FROM customer_schedule`;

        connection.query(sql, function(err, data) {
            if(!err){
            res.send(data);
            } else {
            console.log('Error');
            res.render('index', {title:'Error'});
            }
        });

    

    
  }
module.exports = fn;