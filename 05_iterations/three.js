//Array Based Loops: 

//for of Loop: 
/*

The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.


Syntax of for-of loop: 
for (variable of iterable)
  statement
*/

const arr = [1,2,3,4,5]

for (const value of arr) { // here object can be arr,string,map,nodeList etc
    //console.log(value);
}

const greetings = "Hello World";
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is W
Each char is o
Each char is r
Each char is l
Each char is d
*/




//Maps In JS:
/*

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

*/

const map = new Map();

map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('IN','India')

console.log(map)  
/*
Output: 
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
  */

//traversing map with for of loop
for (const key of map) {
    console.log(key);
}

/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for (const [key,values] of map) {
    console.log(key, ":-" , values);
}

/*
IN :- India
USA :- United States of America
Fr :- France
*/

const myObj = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}


for (const [key,value] of myObj) {
    console.log(key,":-",value);  //TypeError: myObj is not iterable
}

//Note 
// : Not allowed this technique of iterable for Object this is applicable for Maps and other types but not Object . Object have their own different iterating methods .