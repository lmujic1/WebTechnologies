function Prva() {
    if (document.getElementById('predmetiPrva').style.display === "none") {
        document.getElementById('predmetiPrva').style.display = "block";
        document.getElementById('prva').innerHTML = "-Prva godina";
    } else if (document.getElementById('predmetiPrva').style.display === "block") {
        document.getElementById('predmetiPrva').style.display = "none";
        document.getElementById('prva').innerHTML = "+Prva godina";
    }
}

function Druga() {
    if (document.getElementById('predmetiDruga').style.display === "none") {
        document.getElementById('predmetiDruga').style.display = "block";
        document.getElementById('druga').innerHTML = "-Druga godina";
    } else if (document.getElementById('predmetiDruga').style.display === "block") {
        document.getElementById('predmetiDruga').style.display = "none";
        document.getElementById('druga').innerHTML = "+Druga godina";
    }
}