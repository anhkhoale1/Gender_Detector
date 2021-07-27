const express = require('express');
const app = express();
const db = require('../modeles/database');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/play', (req, res) => {
        res.render('play');
    });

    app.get('/create_db', (req, res) => {
        let sql = 'CREATE DATABASE `names` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci';
        db.query(sql, (err, result) => {
            if(err) throw err;
            res.send('Database created');
        })
    });    
    app.get('/create_table', (req, res) => {
        let sql = 'CREATE TABLE names(first_name VARCHAR(255), last_name VARCHAR(255), id INT PRIMARY KEY NOT NULL AUTO_INCREMENT)';
        db.query(sql, (err, result) => {
            if(err) throw err;
            res.send('Table created');
        })
    });
    app.get('/txt-mysql', (req, res) => {
        let sql = 'LOAD DATA LOCAL INFILE "names.txt" INTO TABLE names FIELDS TERMINATED BY " " LINES TERMINATED BY "\n"';
        db.query(sql, (err, result) => {
            if(err) throw err;
            res.send('Txt to mysql succesffully');
        })
    });
    app.get('/rand-firstname',(req, res) => {
        let sql = 'SELECT first_name FROM names ORDER BY RAND() LIMIT 1';
        db.query(sql, (err, result) => {
            if(err) throw err;
            obj = JSON.parse(JSON.stringify(result))[0];
            res.send(obj);
        })
    });

}

module.exports = route;