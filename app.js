var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passportConfig = require('./function/users/funLogin');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const flash = require('connect-flash');
const passport = require('passport')
      , LocalStrategy = require('passport-local').Strategy;
// var cookieSession = require('cookie-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');
var calendarRouter = require('./routes/calendar');
var accountRouter = require('./routes/account');

// connection to databases
var mysql_dbc = require('./config/db_con')();
var connection = mysql_dbc.init();
mysql_dbc.test_open(connection);
// connection lost 해결
handleDisconnect(connection);

function handleDisconnect(client) {

  client.on('error', function (error) {

    if (!error.fatal) return;

    if (error.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

    console.error('> Re-connecting lost MySQL connection: ' + error.stack);

    connection = mysql_dbc.init();
    handleDisconnect(connection);
    mysql_dbc.test_open(connection);

  });

};

var app = express();

/* session middleware */
// session time = 1000 * 60 * 60 // 1h
app.use(session({ 
  cookie: { 
    // maxAge: -1 
    expires: new Date(Date.now() + 900000 * 7),
    httpOnly: true 
  },
  secret: 'qwerqwerasdf1lkjfiioljvb123',
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore({
    host: 'localhost',
        port: '3306',
        user: 'dream',
        password: 'dream',
        database: 'dream_db'
  })
}));

app.use(flash());
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결
passportConfig();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// device server 접속 허용
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);
app.use('/cal', calendarRouter);
app.use('/account', accountRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
