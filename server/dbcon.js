let mysql = require('mysql');
let pool = mysql.createPool({
  connectionLimit : 10,
  host        : 'classmysql.engr.oregonstate.edu',
  user        : 'cs290_hugheale',
  password    : '8376',
  database    : 'cs290_hugheale'
});

module.exports.pool = pool;
