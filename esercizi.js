/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Esistono principalmente 5 tipi di dati in JS detti primitivi. 
Il primo viene chiamato stringa. Le stringhe sono una sequenza di caratteri, più semplicemente, possiamo dire che sono caratterizzati da testi.
Il secondo è chiamato number. I number sono dati di tipo numerico, quindi i semplici numeri.
Il terzo dato è detto booleano. I booleani ci permettono di identificare la veridicità di un valore, in poche parole ci dicono se è vero o falso.
il quarto e il quinto dato, invece, sono dati che indicano una condizione particolare. Rispettivamente sono:
undefined, quando noi non assegnamo un valore alla variabile. In pratica noi abbiamo dichiarato una variabile, per esempio let name -> alert (name) mi darà come risultato undefined.
null, invece, descrive il valore come sconosciuto.
N.B Le stringhe devono esser caratterizzate dalla presenza di apici che possono esser: "...",'...' l'importante è che siano uguali all'inizio e alla fine */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

 /*let myName ='Giulia'
 console.log(myName)*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*let sum = 12 + 20
console.log(sum)*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*let x=12
console.log('variabile di x', x)*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/*myName='Gallo'
console.log('il mio cognome', myName)*/

/*const age = 27
console.log('my age',age)
let age=20
console.log('my age',age)
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let sottrazione= x - 4
 console.log(sottrazione)*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*let name1='john'
let name2 = 'John'
let total =name1 !== name2
console.log('sono diversi', total)*/

/*EXTRA*/

let name1='john'
let name2='John'
name2=name2.toLowerCase()
name1=name1.toLowerCase()
let total=name1===name2
console.log(total)
