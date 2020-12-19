const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    let htmlIspis = "<h1>Zadatak1</h1>\n";

    if (req.method == 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('./imenik.txt', (err, data) => {
            if (err) {
                htmlIspis = "<h2>Error: " + err + "</h2>";
            } else {
                var redoviPodataka = data.toString().split(/\r?\n/);
                var imenik = [];
                for (let i = 0; i < redoviPodataka.length; i++) {
                    var podatak = redoviPodataka[i].split(",");
                    let osoba = {
                        ime: podatak[0],
                        prezime: podatak[1],
                        adresa: podatak[2],
                        broj_telefona: podatak[3]
                    };
                    imenik.push(osoba);
                }

                fs.writeFile("./imenik.json", JSON.stringify(imenik), (err) => {
                    if (err) {
                        htmlIspis = "<h2>Error: " + err + "</h2>";
                        //console.log('Error: ' + err);
                    } else {
                        // console.log('Uspješno upisani podaci u JSON file' + err);
                        htmlIspis = "<h2>Uspješno upisani podaci u JSON file</h2>";
                    }
                });
            }
        });
    }
    res.write(htmlIspis);
    res.end('<b>Metoda ' + req.method + ' </b>');
}).listen(8080);