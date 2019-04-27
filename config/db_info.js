module.exports = (function () {
    return {
      local: { // localhost
        host: 'localhost',
        port: '3306',
        user: 'dream',
        password: 'dream',
        database: 'dream_db'
      },
      real: { // real server db info
        host: 'dreamplusdb.ci0mo8tzfgbv.us-east-2.rds.amazonaws.com',
        port: '3306',
        user: 'dream',
        password: '**',
        database: 'dream_db'
      }
    }
  })();

