const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./Vjezba1/zadatak1/wt-t1z1.html');
    //res.writeHead(200, { 'Content-type': 'text/html' });
    readStream.pipe(res);

}).listen(3000);