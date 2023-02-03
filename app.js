const express = require('express')
const html = require('html')
const sqlite3 = require('sqlite3');
const start = express();
const port = 4000
const fs = require('fs')

let db = new sqlite3.Database('./data.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
  });

start.get('/', (req, res) => {
    res.sendFile(__dirname + '/' +'index.html');
});
start.get("/backend", (req, res) => {
    res.sendFile(__dirname + '/' +'backend.js');
});


start.get("/employees/:id", (req, res, next) => {
    var params = [req.params.id]
    db.get(`SELECT * FROM emp_details where id = ?`, [req.params.id], (err, data) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json(data);
      });
});


start.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });