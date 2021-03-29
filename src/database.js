const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'talleres12',
    database: 'empresa'
});

mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('db esta conectada');
    }
});

module.exports = mysqlConnection;