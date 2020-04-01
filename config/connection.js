const mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'burger_db',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected');
});

module.exports = db;