const express = require("express")
const mysql = require("mysql")
const app = express()
const dbconfig = require('./Models/DB_config.json');
const cors = require("cors")

app.use(cors())
const pool = mysql.createPool({
    connectionLimit : 10,
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database,
    debug:false
})


pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('connected to database');
    connection.release();  // 연결 풀에 반환
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});