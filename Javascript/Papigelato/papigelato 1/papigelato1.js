// Array met de dagen van de week
var dagenVanDeWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

// Functie om de dagen weer te geven

function toonDagen() {
    // Geef de dagen van de week weer in de HTML
    document.getElementById("alleDagen").innerText = dagenVanDeWeek.join(", ");
    // Geef de werkdagen weer in de HTML
    document.getElementById("werkdagen").innerText = dagenVanDeWeek.slice(0, 5).join(", ");
    // Geef de weekenddagen weer in de HTML
    document.getElementById("weekenddagen").innerText = dagenVanDeWeek.slice(5).join(", ");
    // Geef de dagen van de week omgekeerd weer in de HTML
    // slice maakt een kopie van de array en reverse draait de array om
    document.getElementById("omgekeerdeAlleDagen").innerText = dagenVanDeWeek.slice().reverse().join(", ");
    // Geef de werkdagen omgekeerd weer in de HTML
    // slice pakt de elementen vanaf de 0e element tot het 5e element
    document.getElementById("omgekeerdeWerkdagen").innerText = dagenVanDeWeek.slice(0, 5).reverse().join(", ");
    // Geef de weekenddagen omgekeerd weer in de HTML
    // slice pakt de elementen vanaf de 5e element tot het einde van de array
    document.getElementById("omgekeerdeWeekenddagen").innerText = dagenVanDeWeek.slice(5).reverse().join(", ");
}

// Roep de functie aan om de dagen weer te geven
toonDagen();