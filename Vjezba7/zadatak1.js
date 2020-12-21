const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(express.static('public'));

app.get('/unos', function(req, res) {
    //let tijelo = req.body;
    //console.log(tijelo);
    res.sendFile(__dirname + '/public/forma.html');
});
app.post('/', function(req, res) {
    let tijelo = req.body;
    //console.log(req.body);
    let novaLinija = "\n" + tijelo.ime + "," + tijelo.prezime +
        "," + tijelo.adresa + "," + tijelo.broj_telefona;
    fs.appendFile('imenik.txt', novaLinija, function(err) {
        if (err) throw err; {
            const fs1 = require('fs');
            fs1.readFile('imenik.txt', 'utf8', function(err, data) {
                try {
                    const data = fs1.readFileSync('imenik.txt', 'UTF-8');
                    const redoviPodataka = data.split("\n");

                    //kreiranje tabele
                    var table = '<table style="border: 1px solid black; border-spacing: 0px;">';
                    table += '<tr><th style="border: 1px solid black; padding:5px" >Ime</th>' +
                        '<th style="border: 1px solid black; padding:5px">Prezime</th>' +
                        '<th style="border: 1px solid black; padding:5px">Adresa</th>' +
                        '<th style="border: 1px solid black; padding:5px">Broj telefona</th></tr>';
                    redoviPodataka.forEach((osoba) => {
                        if (osoba == "")
                            return;
                        table += "<tr>"
                        const podaci = osoba.split(",");
                        podaci.forEach((podatak) => {
                            table += '<td style="border: 1px solid black; padding:5px">';
                            table += podatak;
                            table += "</td>"
                        });
                        table += "</tr>"
                    });
                    table += "</table>"
                } catch (err) {
                    console.error(err);
                }
                res.send(table);
            });

        }
    });
});

app.listen(8085);