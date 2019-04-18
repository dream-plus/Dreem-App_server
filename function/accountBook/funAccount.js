var mysql_dbc = require('../../config/db_con')();
var connection = mysql_dbc.init();


fn = {}

fn.accountCall = function (req, res, next) {
    const sql = `SELECT * FROM import`

    connection.query(sql, function(err, data) {
        if(!err){
        //    console.log('data value = ' + data);
           res.send(data);
        // res.json({success: true, datavalue: data});
        } else {
          console.log('Error');
          res.render('index', {title:'Error'});
        }
      });
}

/* account value add */
fn.accountAdd =  function (req, res, next) {
    var sql_insert = 'INSERT INTO import ( Details_of_usage, Import_amount, title, based) VALUES(?,?,?,?)';
    params = [ req.body.detail , req.body.amount, req.body.title, req.body.based];
  
    connection.query(sql_insert,params, function (err, result) {
        
       if(err){
         console.log(err);
          res.json({success: false, msg: err});
        }
        else{
          console.log('장부에 내용이 추가 되었습니다.');
          res.json({success: true, msg: 'add success'});
        }
      });
  }

module.exports = fn;