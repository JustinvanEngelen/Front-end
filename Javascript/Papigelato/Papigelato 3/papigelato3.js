var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

// Functie om de resultaten naar het scherm te schrijven
function printResultaat(operatieNaam, operatieSymbool, resultaat) {
    document.write("<p>" + operatieNaam + " van de twee arrays zijn:</p>");
    resultaat.forEach(function (item, index) {
        document.write(arrayEen[index] + " " + operatieSymbool + " " + arrayTwee[index] + " = " + item + "<br>");
    });
}

// Optellen van de twee arrays
var resultaatOptellen = arrayEen.map(function (item, index) {
    return item + arrayTwee[index];
});
printResultaat("Optellen", "+", resultaatOptellen);

// Aftrekken van de twee arrays
var resultaatAftrekken = arrayTwee.map(function (item, index) {
    return item - arrayEen[index];
});
printResultaat("Aftrekken", "-", resultaatAftrekken);

// Vermenigvuldigen van de twee arrays
var resultaatVermenigvuldigen = arrayEen.map(function (item, index) {
    return item * arrayTwee[index];
});
printResultaat("Vermenigvuldigen", "x", resultaatVermenigvuldigen);

// Delen van de twee arrays
var resultaatDelen = arrayTwee.map(function (item, index) {
    return item / arrayEen[index];
});
printResultaat("Delen", ":", resultaatDelen);
