//array 
const myArr = [0,1,2,3,"Piyush",true,2.3];

const myArr1 = new Array(1,2,3,4,5);

console.log(myArr[0]);  //0

//Array Methods 
//Push() and Pop()
// myArr.push(6);
// console.log(myArr);
// myArr.push(8);
// console.log(myArr)
// myArr.pop();
// console.log(myArr)

//unshift() and shift()
console.log(myArr1.unshift()) //5 //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(myArr1) //  [ 1, 2, 3, 4, 5 ]

console.log(myArr1.shift()) //1 //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(myArr1)  //[ 2, 3, 4, 5 ]

//includes method

console.log(myArr1.includes(9)) //false  //Determines whether an array includes a certain element, returning true or false as appropriate.

console.log(myArr1.indexOf(9))  //-1  //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArray = myArr1.join()  //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(myArr1)  //[ 2, 3, 4, 5 ]
console.log(typeof newArray);  //2,3,4,5 type = string 

//slice() and splice() methods

console.log("A",myArr1);  //A [ 2, 3, 4, 5 ]

const myn1 = myArr1.slice(1,3)  //Returns a copy of a section of an array
console.log("B",myn1);  //B [ 3, 4 ]

console.log(myArr1);  //[ 2, 3, 4, 5 ] slice method will not affect the original array 

const myn2 = myArr1.splice(1,3); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log("C",myn2)  //C [ 3, 4, 5 ] this are deleted elements 

//original array
console.log(myArr1)  //[ 2 ]  splice() will affect the original array

//Main Imp Note: 

//slice() method does not affect the original array whereas the splice()
//method will affect the original one and will return the deleted elements 
//of an array 

