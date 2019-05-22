var passport = require('passport');
var mysql_dbc = require('../../config/db_con')();
var connection = mysql_dbc.init();
var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
  /* 사용자 정보 세션 저장 */
  passport.serializeUser((user, done) => { // Strategy 성공 시 호출됨
    // console.log("serializeUser = " + user.autoLogin);
    // done(null, user._id); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 이동
    done(null, user);
  });

  passport.deserializeUser((user, done) => { // 매개변수 id는 req.session.passport.user에 저장된 값
    // console.log("deserializeUser = " + user.autoLogin);
    const userInfo = {
      userId : user.data._id,
      userName : user.data.name,
      autoLogin : user.autoLogin
    }
    done(null, userInfo);
  });

  passport.use('local-signin', new LocalStrategy({

    useridField: 'userid',

    passwordField: 'password',

    session: true,

    passReqToCallback: true //passback entire req to call back

    } , function (req, userid, password, done){
      
      let userInfo = null;

      // if(req.session){ console.log('false login');}
      if(!userid || !password ) { return done(null, false, req.flash('message','All fields are required.')); }

      connection.query("select * from customer_info where _id = ?", [userid], function(err, rows){

        if (err) return done(req.flash('message',err));

        // 아이디 중복여부 체크해주는 곳.
        if(!rows.length){
          console.log('*******  Invalid userid.');
          return done(null, false, req.flash('message','Invalid userid.'));
        }

        // 비밀번호 맞는지 체크해주는 곳.
        if(!bcrypt.compareSync(password, rows[0].pw)){
          console.log('*******  Invalid password.');
          return done(null, false, req.flash('message','Invalid password.'));
        }

        userInfo = {
          data : rows[0],
          autoLogin : req.body.autoLogin
        };
        return done(null, userInfo); // 세션에 저장할 정보를 넣어주는 곳.

      });

    }

  ));
}