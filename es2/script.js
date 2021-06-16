
// Snack 2.
// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area e stampare il risultato con console.log

var triangoloRettangolo = {
    base: 10,
    altezza: 25,
};

var ipotenusa = Math.sqrt(Math.pow(triangoloRettangolo.base, 2) + Math.pow(triangoloRettangolo.altezza, 2));
console.log(ipotenusa);
var area = triangoloRettangolo.base * triangoloRettangolo.altezza / 2;
console.log(area);
var perimetro = triangoloRettangolo.base + triangoloRettangolo.altezza + ipotenusa;
console.log(perimetro);