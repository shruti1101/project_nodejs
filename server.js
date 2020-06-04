const mysql = require('mysql');
const express = require('express');
//const mysqlclient = require('mysql').mysqlclient;
//const bodyparser = require('body-parser');

const app = express();

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "demo"
})


app.listen(3001, function(){
    console.log("we are live on 7777 ");
})
app.get('/emp',(req,res)=>{
    mysqlConnection.query('SELECT * FROM emp', (err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});