
// Snack 3.
// Creare un array con tre numeri, calcolare la media di questi tre numeri.

var number = [10, 20, 30];
var somma = 0;

for (var i = 0; i < number.length; i++){
    somma += number[i];
}

var risultato = somma / number.length;
console.log(risultato);

// Costruiamo un array di tre giocatori di basket. Ogni giocatore avrà le seguenti proprietà:
// nome
// cognome
// anno
// punteggio
// Calcolare il punteggio medio dei tre giocatori

var giocatoriDiBasket = [
    {
        nome: "Pippo",
        cognome: "Rossi",
        anno: 1980,
        punteggio: 120,
    },
    {
        nome: "Aldo",
        cognome: "Bianchi",
        anno: 1990,
        punteggio: 140,
    },
    {
        nome: "Claudio",
        cognome: "Verdi",
        anno: 1995,
        punteggio: 347,
    }

];

console.log(giocatoriDiBasket);

var somma2 = 0;

for (var x = 0; x < giocatoriDiBasket.length; x++) {
    somma2 += giocatoriDiBasket[x].punteggio;
}

var risultato2 = somma2 / giocatoriDiBasket.length;

console.log(risultato2);