var http = require('http'); //ukljucujemo modul http
var fs = require('fs'); //ukljucujemo modul fs
const url = require('url');
http.createServer(function(req, res) {
    var ispis = "Nije GET zahtjev";

    if (req.method == "GET") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./imenik.txt', function read(err, data) {
            if (err) {
                ispis = 'Error read CSV:' + err;
                throw err;
            }

            const myURL = new URL("localhost:8080" + req.url);
            var q = myURL.searchParams.get('q');
            if (q != null) q = q.toLowerCase();

            var dataRows = data.toString().split(/\r?\n/);


            const fs = require('fs');
            var imenik = []
            for (let i = 0; i < dataRows.length; i++) {
                var dataItem = dataRows[i].split(",");
                if (dataItem[0].toLowerCase() == q) {
                    let osoba = {
                        ime: dataItem[0],
                        prezime: dataItem[1],
                        adresa: dataItem[2],
                        broj_telefona: dataItem[3]
                    };
                    imenik.push(osoba);
                }
            }

            fs.writeFile("imenikUpitu.json", JSON.stringify(imenik), function(err) {
                if (err) {
                    ispis = 'Error write JSON:' + err;
                    throw err;
                }
            });

        })
        ispis = 'Kreiran i napisan  JSON file';
    }
    res.write('<h1>' + ispis + '</h1>');
    res.end('<b>Metoda:' + req.method + '</b>');

}).listen(8080);