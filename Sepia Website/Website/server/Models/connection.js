const mysql = require('mysql2/promise');

async function sqlConnection (sql, paramaters){ //here is the code that allows you to connect to a SQL server. 
    const connection = await mysql.createConnection({
        host: redacted,
        user: redacted,
        password: redacted,
        database: redacted
    });
    const [results, ] = await connection.execute(sql, paramaters); //this code functions as a parameter thingy. SQL is the SQL code you want
    //to run while parameters are the specific things you want to change in your SQL code. Everytime you do something in the SQL database
    //youll run this code. connection just makes sure you can actually access your database info
    return results; 
}

module.exports = {
    sqlConnection
}