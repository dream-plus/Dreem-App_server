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
        host: '',
        port: '',
        user: '',
        password: '!',
        database: ''
      }
    }
  })();

