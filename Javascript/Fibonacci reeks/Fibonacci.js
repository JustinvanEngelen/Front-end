// Functie om de Fibonacci-reeks te genereren
function fibonacci(n) {
    var fibArray = [0, 1]; // Array om de Fibonacci-reeks op te slaan

    for (var i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]); // Bereken het volgende Fibonacci-getal en voeg het toe aan de array
    }

    return fibArray; // Geef de volledige Fibonacci-reeks terug
}

// Functie om de Fibonacci-getallen op het scherm weer te geven
function displayFibonacci() {
    var fibSequence = fibonacci(20); // Bereken de eerste 20 Fibonacci-getallen
    var output = "De eerste 20 getallen van de Fibonacci-reeks zijn: ";

    for (var i = 0; i < fibSequence.length; i++) {
        output += fibSequence[i] + ", "; // Voeg elk Fibonacci-getal toe aan de uitvoer
    }

    console.log(output); // Toon de Fibonacci-reeks in de console
    // Als je dit in een HTML-document gebruikt, kun je in plaats daarvan de Fibonacci-reeks in een element op de pagina invoegen.
}

// Roep de functie aan om de Fibonacci-reeks weer te geven
displayFibonacci();
