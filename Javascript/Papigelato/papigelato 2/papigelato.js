var names = []; // Maak een lege array voor de namen

var addedNames = 0; // Houd het aantal toegevoegde namen bij

while (addedNames < 3) {
    var name = prompt("Voer naam " + (addedNames + 1) + " in:");
    if (name) { // Controleer of de invoer niet leeg is
        names.push(name);
        addedNames++; // Tel het aantal toegevoegde namen op
    } else {
        alert("Voer een geldige naam in.");
    }
}

// Toon de ingevoerde namen op het scherm
document.write("<h2>De ingevoerde namen in de array zijn:</h2>");
document.write("<ul>");
for (var i = 0; i < names.length; i++) {
    document.write("<li>" + names[i] + "</li>");
}
document.write("</ul>");

// Toon de ingevoerde namen in omgekeerde volgorde op het scherm
document.write("<h2>De ingevoerde namen in de array in omgekeerde volgorde zijn:</h2>");
document.write("<ul>");
for (var i = names.length - 1; i >= 0; i--) {
    document.write("<li>" + names[i] + "</li>");
}
document.write("</ul>");