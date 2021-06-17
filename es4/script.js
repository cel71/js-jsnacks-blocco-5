
// Snack 4 -
// Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
// nome
// cognome
// age
// descrizione
// Per nome, cognome ed age assegnate direttamente nel codice i valori che volete.
// ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.
// {
//   nome: ‘Pippo’,
//   cognome: ‘Baudo’,
//   age: 80,
//   descrizione: ‘’
// } 
// Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, salviamola quindi all’interno della sua proprietà.
// Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;)
// Stampiamo con un console.log il risultato di questo array di studenti aggiornato.
// Bonus
// Visualizzare nell’html questi dati in una forma tabellare.

var studenti = [
    {
        nome: "Mario",
        cognome: "Rossi",
        age: 23,
        descrizione: "",
    },
    {
        nome: "Francesca",
        cognome: "Verdi",
        age: 20,
        descrizione: "",
    },
    {
        nome: "Ferdinando",
        cognome: "Bianchi",
        age: 25,
        descrizione: "",
    },
];

for (var y = 0; y < studenti.length; y++) {
    for (var key in studenti[y]) {
        document.getElementById("studenti1").innerHTML += "<li>" + key + ": " + studenti[y] [key] + "</li>";
    }
}

for (var x = 0; x < studenti.length; x++) {
    var user = prompt("Inserisci una descrizione dell' alunno");
    studenti[x].descrizione = user;
}

console.log(studenti);

// bonus:

for (var i = 0; i < studenti.length; i++) {
    for (var key in studenti[i]) {
        document.getElementById("studenti2").innerHTML += "<li>" + key + ": " + studenti[i] [key] + "</li>";
    }
}

// bonus versione due, js - ES6:

for (var i = 0; i < studenti.length; i++) {
    const {nome, cognome, age, descrizione} = studenti[i];
    document.getElementsByClassName("tabella")[0].innerHTML += `
    <ul>
        <li>${nome}</li>
        <li>${cognome}</li>
        <li>${age}</li>
        <li>${descrizione}</li>
    </ul>
    `
}
