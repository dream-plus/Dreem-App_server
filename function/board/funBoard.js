var mysql_dbc = require('../../config/db_con')();
var connection = mysql_dbc.init();




fn.boardWrite =  function (req, res, next) {
    const sql_insert = `INSERT INTO customer_board (_id, name, writing, board) VALUES(?,?,?,?)` ;  
    var params = [req.body._id, req.body.name, req.body.writing, req.body.board];
  
    connection.query(sql_insert,params,function(err, result) {
        if(err){
            console.log(err);
             res.json({success: false, msg: err});
           }
           else{
             console.log('저장되었습니다. ' );
             res.json({success: true, msg: 'board success'});
           }
    });
}


module.exports = fn;