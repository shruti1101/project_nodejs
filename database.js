const {
     createPool
    } = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "demo",
    connectionLimit: 10
})

pool.query(`select * from emp`, (err,result,field) => {
    if(err) {
        return console.log(err);
    }
    return console.log(result);
})