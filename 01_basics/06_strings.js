const name = "Piyush"
const repoCount = 3

console.log(`Hello My Name is ${name} and my Total repo is ${repoCount}`)
//Hello My Name is Piyush and my Total repo is 3

const gameName = new String("Piyush");

console.log(gameName.charAt(2)); // y
console.log(gameName.__proto__);  //{}
console.log(gameName.indexOf('s')) //4
console.log(gameName[0]);  //P
console.log(gameName.concat(" Khatri")); //Piyush Khatri
console.log(gameName)  //[String: 'Piyush']

const sentence = "I am Piyush Hello!"
console.log(sentence.split(' '));

const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words);

let s = "             fdafasf                ";
console.log(s.trim())  //fdafasf

console.log(gameName.length);  //6


