var mysql = require('mysql')

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"demo"
})

con.connect(function(err){
    if(err)throw err;
    var sql = "INSERT into emp(empid,name)values('BT122','Avira')"
    con.query(sql, function(err , result){
        if(err)throw err;
        console.log("1 entry added")
        console.log(result)
    })
 
})