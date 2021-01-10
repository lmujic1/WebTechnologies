var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var db = require('./database');
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "public")));

app.get('/imenik', function(req, res) {
    var sql = 'SELECT * FROM imenik';
    db.query(sql, function(err, results, fields) {
        if (err) throw err;
        //console.log(data)
        res.render('./tabela.ejs', { podaciIzTabele: results });
    });
});
app.listen(3000);