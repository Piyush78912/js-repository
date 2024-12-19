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

//only positive indexes are allowed to get substring 
console.log(gameName.substring(0,4));  //Piyu

//slice also accepts negative index which starts from reverse 
//whereas substring can not accept negative index.

console.log(gameName.slice(0,3))

const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const lastTwo = fruits.slice(-2); 
console.log(lastTwo); // ['Mango', 'Pineapple']


//replace() method = replace(pattern, replacement)

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

/*
includes() method:  it checks values in array and  returns true or false 
based on result

//Syntax: 
includes(searchElement)
includes(searchElement, fromIndex)

*/
const array1 = [1, 2, 3];

console.log(array1.includes(2));  //true
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); //true
// Expected output: true

console.log(pets.includes('cat',1)); //false
// Expected output: false




