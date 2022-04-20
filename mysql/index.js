var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'spirit',
//    ssl: {
//      ca: require('../ssl/mysql-ca.crt')
//    }
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('Connected to MYSQL');
});

module.exports = connection;