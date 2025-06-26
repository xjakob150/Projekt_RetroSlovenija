const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'retroslovenija', 
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err.message);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = db;
