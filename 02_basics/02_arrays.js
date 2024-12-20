const marvel_heroes = ['Thor','IronMan','SpiderMan']
const dc_heroes = ['SuperMan','Flash','BatMan']

//marvel_heroes.push(dc_heroes);
//console.log(marvel_heroes)  //[ 'Thor', 'IronMan', 'SpiderMan', [ 'SuperMan', 'Flash', 'BatMan' ] ]  It will consider dc_heroes as 4th element
//and assume that it is single element but not concatenate

// console.log(marvel_heroes[3][0])  //SuperMan
// console.log(marvel_heroes[3][1])  //Flash
// console.log(marvel_heroes[3][2]) //BatMan


//For Concating Both Arrays
//concat(): Combines two or more arrays. This method returns a new array without modifying any existing arrays.


const allHeroes = marvel_heroes.concat(dc_heroes);
//console.log(allHeroes); //[ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]


//we can also use spread operator = ...  for concatenation of any number of array : 

//example: 

const all_new_heroes = [...allHeroes,...dc_heroes]; //using ...spread operator with array for concatenation of any number of array

// console.log(all_new_heroes);  //[ 'Thor', 'IronMan', 'SpiderMan', 'SuperMan', 'Flash', 'BatMan' ]

//using flat method to concatenate subarray also within an array 
//ex= 

const another_array = [1,2,3,[4,5,6],[7,8,[9,10]],11];
const new_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.  //here we goes depth into infinite level 

 console.log(new_another_array)  
// output= //[
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10,
//    11
//  ]

//Array.isArray(): 
// The Array.isArray() static method determines whether the passed value is an Array.


console.log(Array.isArray('Piyush'))  //false

//Array.from(): 
// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from("Piyush"))  //[ 'P', 'i', 'y', 'u', 's', 'h' ]

console.log(Array.from({
    name:"Ram"
}))  //[] empty array because it will not create new array of object.
//it will need to specified or tell that I want to create array of 
//only keys or only values //we'll see later

const score1 = 100;
const score2 = 200;
const score3 = 300;
const score4 = 400;

//Array.of(): The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of(score1,score2,score3,score4));  
// Output=> [ 100, 200, 300, 400 ]







