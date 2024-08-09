const mysql = require("mysql");
const dbConfig = require("../config/db.config")

//Create DB Connection 
const connection = mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DATABASE
});

//Connect to DB
connection.connect((error: any)=>{
    if (error) throw error
        console.log("Successfully connected to database server...")
})
module.exports = connection