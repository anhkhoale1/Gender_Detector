const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    //database: 'names',
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL connected....')
});

module.exports = db;