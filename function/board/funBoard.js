var mysql_dbc = require('../../config/db_con')();
var connection = mysql_dbc.init();



/* board Announcement */
fn.board1Write =  function (req, res) {
    const sql_insert = `INSERT INTO Board1 (_id, name, content, category, title) VALUES(?,?,?,?,?)` ;  
    var params = [req.body._id, req.body.name, req.body.content, req.body.category, req.body.title];
  
    connection.query(sql_insert,params,function(err, result) {
        if(err){
            console.log(err.sqlMessage);
             res.json({success: false, msg: err});
           }
           else{
             console.log('저장되었습니다. ' );
             res.json({success: true, msg: 'uploading success'});
           }
    });
}

fn.board1Pasing = function (req, res, next) {
    const sql = `SELECT * FROM Board1`

    connection.query(sql, function(err, data) {
        if(!err){
        //    console.log('data value = ' + data);
           res.send(data);
        } else {
          console.log('Error');
          res.render('index', {title:'Error'});
        }
      });
}
/* board error */
fn.board2Write =  function (req, res, next) {
    const sql_insert = `INSERT INTO Board2 (_id, name, content, category, title) VALUES(?,?,?,?,?)` ;  
    var params = [req.body._id, req.body.name, req.body.content, req.body.category, req.body.title];
  
    connection.query(sql_insert,params,function(err, result) {
        if(err){
            console.log(err.sqlMessage);
             res.json({success: false, msg: err});
           }
           else{
             console.log('저장되었습니다. ' );
             res.json({success: true, msg: 'uploading success'});
           }
    });
}

fn.boardPasing = function (req, res, next) {
    
}

module.exports = fn;