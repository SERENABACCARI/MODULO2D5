/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {               //funzione crazysum con a,b//
  if (a === b) { 
    return (a + b) * 3
  } 
  else {
    return a + b 
  }
}

const result = crazySum(10, 20)
console.log(result)

const somma = 2 * 3
console.log(somma)


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}
console.log(boundary(400))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
  return str.split("").reverse("").join("")
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(String) {
  let words=String.split("")
}
console.log(words)

for(let word of words){
  console.log(word)
  let firstLetter=word[0].toUpperCase()
  let remainingLetters=word.slice(1)
  console.table({firstLetter,remainingLetters})
}


upperFirst("Sentirsi Liberi")



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function givemeMeRandom(n) {
  let arr=[0,1,2,3,4,5,6,7,8,9,10]
  for (let i = 0; i < n; i++)
  {
    arr.push(Math.floor(Math.random() * 10))
  }
  return arr
  
}

 console.log(givemeMeRandom(10))



//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1,l2) {
  return l1*l2
  
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numero) {
  if(numero>19){
    return(numero)*3
  }
  
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function codify(params) {
  return "code"+params
  if(params.includes("code"))
  {
    return params.replace("code","")
  }
  
}
console.log(codify("code"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
  if(num % 3 )or (num % 7)
  {
    return true
  } //else {return false}                         // qui iserisco la funzione ma mi da errore
}

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutstring(stringa) {
  return stringa.slice(1,stringa.leght-1)
  
}
