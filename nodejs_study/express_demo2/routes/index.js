var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test', function (req, res, next) {
  console.log('111');
  console.error('222');
  mysql_test();
  res.send('why, tell me why!!!');
});


//mysql数据库测试  npm install mysql
function mysql_test() {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root'
  });

  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });

  connection.end();
}




module.exports = router;
