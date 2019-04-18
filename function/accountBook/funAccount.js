var mysql_dbc = require('../../config/db_con')();
var connection = mysql_dbc.init();


fn = {}

fn.accountCall = function (req, res, next) {

    if(req.params.id == "income"){
        var sql = `SELECT * FROM import`

        connection.query(sql, function(err, data) {
            if(!err){
            res.send(data);
            } else {
            console.log('Error');
            res.render('index', {title:'Error'});
            }
        });
    }else if(req.params.id == "expense"){
        var sql = `SELECT * FROM expense`

        connection.query(sql, function(err, data) {
            if(!err){
            res.send(data);
            } else {
            console.log('Error');
            res.render('index', {title:'Error'});
            }
        });
    }else if(req.params.id == "amount"){
        var im_sql = `SELECT SUM(Import_amount) as imAmount FROM import`
        var ex_sql = `SELECT SUM(Expense_amount) as exAmount FROM expense`

        connection.query(im_sql,function(err, imdata){
            if(!err){
                connection.query(ex_sql,function(err, exdata){
                    if(!err){
                        // console.log(imdata[0].imAmount - exdata[0].exAmount);
                        var result = imdata[0].imAmount - exdata[0].exAmount;
                        return res.send({data: result});
                    }else {
                        console.log('Error');
                        res.render('index', {title:'Error'});
                        }
                });
            }else {
                console.log('Error');
                res.render('index', {title:'Error'});
                }
            
        });
    }
    
}

/* account value add */
fn.accountAdd =  function (req, res, next) {

    if(req.body.selection == "수입"){
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
    }else if(req.body.selection == "지출"){
        var sql_insert = 'INSERT INTO expense ( Details_of_usage, Expense_amount, title, based) VALUES(?,?,?,?)';
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
    
  }

module.exports = fn;