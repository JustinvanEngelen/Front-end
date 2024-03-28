// Functie om tafels in de array te genereren
function generateTafels(arr) {
    var tafels = [];
    arr.forEach(function (getal) {
        var tafel = [];
        for (var i = 1; i <= 10; i++) {
            tafel.push(getal * i);
        }
        tafels.push({getal: getal, tafel: tafel});
    });
    return tafels;
}

// Functie om de resultaten naar het scherm te schrijven
function printTafels(tafels) {
    tafels.forEach(function (item) {
        document.write("<h3>Tafel van " + item.getal + ":</h3>");
        document.write("<ul>");
        item.tafel.forEach(function (product, index) {
            document.write("<li>" + item.getal + " x " + (index + 1) + " = " + product + "</li>");
        });
        document.write("</ul>");
    });
}

// Array met de gewenste getallen
var getallen = [2, 4, 6, 8];

// Genereer tafels voor de opgegeven getallen
var tafels = generateTafels(getallen);

// Schrijf de tafels naar het scherm
printTafels(tafels);
