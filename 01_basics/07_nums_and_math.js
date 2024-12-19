const score = 200;

const balance = new Number(399)

console.log(balance);  //[Number: 399]
console.log(score); // 200

console.log(balance.toString()) //399 it is converted into String
console.log(balance.toString().length) //3

//toFixed(number) = returns number of digits after the decimal points 

console.log(balance.toFixed(2)) // 399.00

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)) //124

const hundreds = 1000000;

/*
The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number.

Syntax: 
toLocaleString()
toLocaleString(locales) 
*/

//In  U.S. English locale
console.log(hundreds.toLocaleString());  //1,000,000

// India uses thousands/lakh/crore separators

console.log(hundreds.toLocaleString('en-IN'))  //10,00,000


//                              Maths
//Maths Library comes in JS bydefault.

console.log(Math);  //Object [Math] {} 
console.log(Math.max(1,2,3,299))  //299
console.log(Math.min(2,3,-1,0))  // -1
console.log(Math.abs(-4)) //4
console.log(Math.ceil(1.1)) //2
console.log(Math.floor(1.9)) //1
console.log(Math.round(1.55)) //2
console.log(Math.random()) //0.2813247769292917

console.log((Math.random() * 10) + 1) //8.247789567365421 

const min = 10
const max = 20

console.log(Math.floor((Math.random() * 10 ) + 1) + 10);  //19

