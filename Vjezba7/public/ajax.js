function ucitajStranicu(br) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    if (br == 1)
        xhttp.open("GET", "stranica1.txt", true);
    if (br == 2)
        xhttp.open("GET", "stranica2.txt", true);
    if (br == 3)
        xhttp.open("GET", "stranica3.txt", true);
    xhttp.send();
}