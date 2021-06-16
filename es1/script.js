
// Snack 1.
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// // Peso = 10

var palla = {
    nome: "palla",
    peso : 10,
}

console.log(palla);

// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

var user = parseInt(prompt("Modifica peso della palla"));

palla.peso = user;

console.log(palla);

// Inserire  l’oggetto palla in una array var giochi = []

var giochi = [];

giochi.push(palla);

console.log(giochi);

// Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi

var nuovoGioco = prompt("inserisci un nuovo gioco");
var nuovoPeso = prompt("inserisci un nuovo peso");

giochi.push({
    gioco: nuovoGioco,
    peso: nuovoPeso,
});
