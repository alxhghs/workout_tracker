/**
 * Author: Alex Fenwood Hughes
 * Course: CS 290
 * Date: August 12th, 2018
 * Description: API for workout application
 * Email: hugheale@oregonstate.edu
 */

const express = require('express');
const mysql = require('./dbcon.js');

const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const request = require('request');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 52451);
app.use(express.static('public'));

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

app.get('/', (req,res,next) => {
  let context = {};
  request.get(`http://localhost:${app.get('port')}/read`, (err, response, body) => {
    if(!err && response.statusCode < 400){
      context.results = JSON.parse(body).results;
      res.render('home', context);
    } else {
      next(err);
    }
  });
});

// display all items in the database
app.get('/read', (req,res,next) => {
  mysql.pool.query("SELECT * FROM workouts", (err,results,fields) => {
    res.header("Content-Type", "application/json");
    if(err){
      res.status(500).send(JSON.stringify({"status": 500, "error": err}));
      next(err);
      return;
    }
    res.send(JSON.stringify({"status": 200, "results": results}));
  });
});

// display individual item from database
app.get('/read-id', (req,res,next) => {
  mysql.pool.query("SELECT * FROM workouts WHERE id=?", [req.query.id], (err,result,fields) => {
    res.header("Content-Type", "application/JSON");
    if(err){
      res.status(500).send(JSON.stringify({"status": 500, "error": err}));
      next(err);
      return;
    }
    if(result.length !== 1){
      res.status(500).send(JSON.stringify({"status": 500, "error": "Invalid ID"}));
      next(err);
      return;
    }
    res.send(JSON.stringify({"status": 200, "results": result}));
  });
});

// take a post request to add a new item to the database
app.post('/create', (req,res,next) => {
  res.header("Content-Type", "application/json");
  console.log('printing body:');
  console.log(JSON.stringify(req.body));
  if (req.body['name'] === "" || req.body['name'] === undefined) {  // empty name field, do nothing
    res.status(500).send(JSON.stringify({"status": 500, "error": "Workout name required"}));
    return;
  }

  // array to send to mysql, if value not provided, provide an empty value (except for name, which is required)
  let values = [];
  values.push(req.body.name);
  values.push(req.body.reps   || "");
  values.push(req.body.weight || "");
  values.push(req.body.date   || "");
  values.push(req.body.lbs    || "");
  console.log(JSON.stringify(values));

  const sql = "INSERT INTO `workouts` (`name`, `reps`, `weight`, `date`, `lbs`) VALUES (?);";
  mysql.pool.query(sql, [values], (err, results) => {
    if (err) {
      res.status(500).send(JSON.stringify({"status": 500, "error": err}));
      console.log(err);
      next(err);
      return;
    }
    let id = results.insertId;
    mysql.pool.query('SELECT * FROM workouts', function(err, results) {
      if (err) {
        res.status(500).send(JSON.stringify({"status": 500, "error": err}));
        next(err);
        return;
      }
      let update = `Added ${req.body.name}`;
      res.send(JSON.stringify({"status": 200, "update": update, "id": id}));
    });
  });
});

// update contents of the database
app.post('/update', (req,res,next) => {
  res.header('Access-Control-Allow-Origin', "*");  // allow requests from different ports (used for React development)
  res.header("Content-Type", "application/json");
  let sql = "SELECT * FROM workouts WHERE id=?";
  // check that the ID exists to update
  mysql.pool.query(sql, [req.body.id], (err, result) => {
    if(err){
      next(err);
      res.status(500).send(JSON.stringify({"status": 500, "error": err}));
      return;
    }
    // check that one item was returned with the ID
    if(result.length !==1){
      res.status(500).send(JSON.stringify({"status": 500, "error": "Invalid ID"}));
      next(err);
      return;
    }
    if(result.length === 1){
      const currVals = result[0];
      // update the item
      sql = "UPDATE workouts SET name=?, reps=?, weight=?, date=?, lbs=? WHERE id=?";
      let query = [
	      req.body.name   || currVals.name,
        req.body.reps   || currVals.reps,
        req.body.weight || currVals.weight,
        req.body.date   || currVals.date,
        req.body.lbs,
        req.body.id
      ];
      // return the updated values
      mysql.pool.query(sql, query, (err, result) => {
        if(err){
          res.status(500).send(JSON.stringify({"status": 500, "error": err}));
          next(err);
          return;
        }
        sql = "SELECT * FROM workouts WHERE id=?";
        mysql.pool.query(sql, req.body.id, (err, result) => {
          if(err){
            res.status(500).send(JSON.stringify({"status": 500, "error": err}));
            next(err);
            return;
          }
          result = result[0];
          const update = {
            "name": result.name,
            "reps": result.reps,
            "weight": result.weight,
            "date": result.date,
            "lbs": result.lbs
          };
          res.send(JSON.stringify({"status": 200, "update": update}));
        });
      });
    }
  });
});

// delete a row
app.post('/delete', (req,res,next) => {
  res.header('Access-Control-Allow-Origin', "*");  // allow requests from different ports (used for React development)
  res.header("Content-Type", "application/json");
  let sql = "SELECT * FROM workouts WHERE id=?";
  mysql.pool.query(sql, [req.body.id], (err,result) => {
    if(err){
      console.log(err);
      res.status(500).send(JSON.stringify({"status": 500, "error": err}));
      next(err);
      return;
    }
    // check that the ID exists to delete
    if(result.length !== 1){
      console.log(err);
      res.status(500).send(JSON.stringify({"status": 500, "error": "Invalid ID"}));
      next(err);
      return;
    }
    // delete the ID
    sql = "DELETE FROM workouts WHERE id=?";
    mysql.pool.query(sql, [req.body.id], (err,result) => {
      if(err){
        console.log(err);
        res.status(500).send(JSON.stringify({"status": 500, "error": err}));
        next(err);
        return;
      }
      let update = `Deleted ${req.body.id}`;
      res.send(JSON.stringify({"status": 200, "update": update}));
    });
  });
});

// resetTable the mysql table
app.post('/reset-table', (req,res,next) => {
  res.header('Access-Control-Allow-Origin', "*");  // allow requests from different ports (used for React development)
  res.header("Content-Type", "application/json");
  mysql.pool.query("DROP TABLE IF EXISTS workouts", (err) => {
    const createString = "CREATE TABLE workouts("+
      "id INT PRIMARY KEY AUTO_INCREMENT,"+
      "name VARCHAR(255) NOT NULL,"+
      "reps INT,"+
      "date DATE,"+
      "weight INT,"+
      "lbs BOOLEAN)";
    if (err){
      res.status(500).send(JSON.stringify({"status": 500, "error": err}));
      next(err);
      return;
    }
    mysql.pool.query(createString, (err) => {
      if (err){
        res.status(500).send(JSON.stringify({"status": 500, "error": err}));
        next(err);
        return;
      }
      res.send(JSON.stringify({"status": 200, "update": "TableContainer reset"}));
    });
  });
});

app.use((req,res) => {
  res.status(404);
  res.render('404');
});

app.use((err,req,res,next) => {
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), () => {
    console.log(`Express started on http://localhost:${app.get('port')}; press Ctrl-c to terminate.`);
});

