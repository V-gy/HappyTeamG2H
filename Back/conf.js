const mysql = require("mysql");


const connection = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"dzen4jane",
        database:"game"
    }
);

module.exports = connection;