var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'gallery'
});

connection.connect();

module.exports = connection;