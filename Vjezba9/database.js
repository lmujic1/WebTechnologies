var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost', //gdje se nalazi baza
    user: 'root',
    password: '',
    database: 'vjezba9'
});

connection.connect();

/*connection.query('SELECT * FROM imenik', function(error, results, fields) {
    if (error) throw error;
    //for (red of results) {
    //    console.log('Ime je: ', red.ime);
    //}
});*/

//connection.end();

module.exports = connection;