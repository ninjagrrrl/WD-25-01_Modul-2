// !VARIABLEN LEVEL 1_5

// let carName = "BMW";
// console.log(carName);

// let x = 150;
// console.log(x);

// let y = 50;
// console.log(y);

// let z = "x+y";
// console.log(Number(x+y));

// ODER

// let z = x+y;
// console.log(z);

// let firstName = "John";
// let lastName = "Doe";
// let age = 35

// console.log(firstName, lastName, age);


// !VARIABLEN LEVEL 1_6

// - 1. Deklariere die Variable let x mit dem Wert 34. Überschreibe x anschließend mit dem Wert 67. Gib den Wert x in der Konsole aus. Danach kommentiere deinen Code aus.
// - 2. Deklariere die Variable const y mit dem Wert 34. Überschreibe y anschließend mit dem Wert 67. Gib den Wert y in der Konsole aus. Warum erhältst du eine Fehlermeldung?

// let x = 34;
// x = 67;
// console.log(x);


// const y = 34;
// y = 67;
// console.log(y);

// - Bei const y gibt es eine Fehlermeldung, weil es eine konstante Variable ist, die nicht verändert werden kann


// !ARITHMETISCHE OPERATOREN LEVEL 1_8

// let x = 20;
// let y = 30;
// console.log(x+y);
// console.log(x-y);
// console.log(y-x);

// console.log(x*y);
// console.log(x/y);

// let z = 10;
// console.log(x*y)/z;

// let resultOne = x*y/z
// console.log(resultOne);


// let a = 15;
// let b = 9;
// console.log(a % b);


// let c = 20;
// console.log(a+b)*c;

// let resultTwo = (a+b)*c;
// console.log(resultTwo);

// console.log(++a);
// console.log(--b);

// let resultThree = a-b;
// console.log(resultThree);

// console.log(resultOne % resultTwo);




// !ARITHMETISCHE OPERATOREN LEVEL 1_12
// - Lernziel: arithmetische Operatoren (Multiplikation, Inkrementierung, Dekrementierung) und die Reihenfolge der Berechnungen durch Verwendung von Klammern ().


// let score = 5 + 5 * 10;  
// console.log('Ergebnis: ' + score);


// let score = (5 + 5) * 10;  
// console.log('Ergebnis: ' + score)

// let score = 0;  
// score = score + 10;  
// console.log('Ergebnis: ' + score);


// score += 10;  
// console.log('Ergebnis: ' + score)


// let zahl = 1; 
// console.log(zahl);

// zahl = zahl + 1;
// console.log(zahl) 

// zahl += 1;
// console.log(zahl) 

// console.log(++zahl)

// console.log(--zahl);



// !NUMBER METHODEN LEVEL1_2

// - Die Methode toFixed(y) liefert y Nachkommastellen, also die Länge nach dem Dezimalpunkt.
// - Konvertiere alle Zahlen zu 2 Nachkommastellen und lass Dir mit der Konsole das Ergebnis anzeigen.
// - Nutze folgende Werte: 15.16698, 7.78714, "12.3", true, false, "321" und "Supercode".


// let num = 15.16698;
// let n = num.toFixed(2);
// console.log(n);

// let num1 = 7.78714;
// let n1 = num1.toFixed(2);
// console.log(n1);

// let num2 = "12.3";
// let n2 = (Number(num2)).toFixed(2);
// console.log(n2);

// let num3 = true;
// // console.log(Number(num3))
// let n3 = (Number(num3)).toFixed(2);
// console.log(n3);

// let num4 = false;
// // console.log(Number(num4));
// let n4 = (Number(num4)).toFixed(2);
// console.log(n4);

// let num5 = "321";
// let n5 = (Number(num5)).toFixed(2);
// console.log(n5);


// let num6 = "Supercode";
// let n6 = (Number(num6)).toFixed(2);
// console.log(n6);


// !STRING METHODEN LEVEL 1_1

// - Nun beschäftigtst du dich mit string-Methoden. Dahinter stecken Methoden, um Zeichenketten - strings - zu analysieren und mit ihnen zu arbeiten.
// - So kannst du beispielsweise die [Länge](https://www.w3schools.com/jsref/jsref%5Flength%5Fstring.asp) eines strings herausfinden oder strings miteinander verbinden.
// - Im ersten Schritt sollst du dir zwei Variablen erstellen: firstName und lastName.
// - Lasse dir nun die Länge der beiden Variablen in der Konsole anzeigen. Nutze dafür .length.
// - Erstelle noch eine Variable fullName, die die Summe der beiden Variablen ist.
// - Im Anschluss sollst du dir die Länge der Variable fullName in der Konsole anzeigen lassen.


// let firstName = "juju"
// let lastName = "jaja"

// console.log(firstName.length, lastName.length);

// let fullName = "jujujaja"
// console.log(fullName.length);

// ODER

// let fullName = firstName + lastName;
// console.log(fullName.length);



// !STRING METHODEN LEVEL 1_2

// - Verwende den Befehl [indexOf()](https://www.w3schools.com/jsref/jsref%5Findexof.asp), um die Position eines Zeichens in einer Zeichenkette als Ergebnis in der Konsole zu erhalten.
// - Nutze dafür folgende Variable: const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
// - Suche nun die Position des Zeichens "h" in der Variablen txt.
// - Suche im Anschluss die Position des Zeichens "Earth" in der Variablen txt.
// - Und zuletzt sollst du die Position des Zeichens "Moon" in der Variablen txt suchen.


// const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."
// let text = txt.indexOf("h");
// console.log(text);

// let text1 = txt.indexOf("Earth");
// console.log(text1);

// let text2 = txt.indexOf("Moon");
// console.log(text2);


// ! LEVEL 1_4 slice()

// - Lernziel: String-Methode [slice()](https://www.w3schools.com/jsref/jsref%5Fslice%5Fstring.asp) verstehen und anwenden.
// - slice() extrahiert Inhalte der Variable und gibt es in Form eines Arrays zurück.
// - Probiere es mit const A = 'Susi is going to codingschool' aus und wende slice() an, um in der console Folgendes angezeigt zu bekommen:



// const A = "Susi is going to codingschool";
// //     - Susi
// let result = A.slice(0, 4);
// console.log(result);

// //     - is
// console.log(A.slice(5, 7));


// //     - is going to school VERSION 1
// let result1 = A.slice (5, 17)
// let result2 = A.slice (-6);
// console.log(result1 + result2);

// //     - is going to school VERSION 2
// let result3 = A.replace("codingschool", "school");
// console.log(result3.slice(5));

// //     - school
// console.log(result3.slice(-6));

// //     - Susi is school
// let result4 =A.replace("going to codingschool", "school");
// console.log(result4.slice(0));


// ! LEVEL 1_5 substring()



const text4 = "Susi is back from codingschool";

// - Susi
let result1 = text4.substring(0, 4);
console.log(result1);
// - is
let result2 = text4.substring(5, 8);
console.log(result2);
// - school
let result3 = text4.substring(24, 30);
console.log(result3);
// - Susi is school
let result4 = text4.substring(0, 8);
let result5 = text4.substring(5, 0);
console.log(result4+text4.substring(text4.length -6));



// !LEVEL 1_7 replace()

// - Eine weitere string-Methode ist: [replace()](https://www.w3schools.com/jsref/jsref%5Freplace.asp). Auch diesen Befehl kannst du verwenden, um die gewünschten Zeichenketten zu erhalten.
// - Nutze wiedereinmal die folgende Variable const text = "Sam is good at codingschool" und zeige mit der Methode "replace" folgende Ausgabe in der Console an:
// - Speichere jedes Ergebnis in einer Variablen.
// - myVar ist hier nur ein Beispiel und kann durch den Namen deiner Variablen ersetzt werden.


// const txt = "Sam is good at codingschool";

// // - Sam is bad at school
// // um zwei verschiedene wörter in einem satz auzutauschen, .replace() aneinanderketten:
// let result = txt.replace("good", "bad").replace("codingschool", "school");
// console.log(result);

// // - Susi is good at school
// let result1 = txt.replace("Sam", "Susi").replace("codingschool", "school");
// console.log(result1);

// // - Sam is good at tennis
// let result2 = txt.replace("codingschool", "tennis");
// console.log(result2);


// !LEVEL 1_8 toUpperCase() toLowerCase()

// - Verwende den Befehl [toUpperCase()](https://www.notion.so/String-Methods-Level-1_8-toUpperCase-toLowerCase-c55a2281acd44061a9d69a4c6daa13a5?pvs=21), um aus der Variable const text = "Sam is going to codingschool" die veränderte Zeichenkette zu erhalten: SAM IS GOING TO SCHOOL.
// - Neben toUpperCase() gibt es auch noch den Befehl [toLowerCase()](https://www.notion.so/String-Methods-Level-1_8-toUpperCase-toLowerCase-c55a2281acd44061a9d69a4c6daa13a5?pvs=21). Schaue, was passiert, wenn du dies auf die Variable text anwendest.
// - Erzeuge mit den beiden Befehlen folgende Zeichenketten und gib sie in der Console aus:
//     - SAM IS GOING TO SCHOOL
//     - sam is going to school
//     - SAM is going to SCHOOL
//     - Sam IS GOING TO school
//     - Sam Is Going To School


const text3 = "Sam is going to codingschool";

let result6 = text3.toUpperCase();
console.log(result6);

let result7 = text3.toLowerCase();
console.log(result7);

let result8 = text3.replace("Sam", "Sam" .toUpperCase());
console.log(result8);

let result9 = text3.replace("is going to", "is going to" .toUpperCase());
console.log(result9);


let result10 = text3.replace("i", "i" .toUpperCase()).replace("g", "g" .toUpperCase()).replace("t", "t" .toUpperCase()).replace("codingschool", "school").replaceAll("s", "s" .toUpperCase());
console.log(result10);
