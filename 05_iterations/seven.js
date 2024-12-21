//Array Map method : 
/*
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

//map is very each than for each we can use both for this

const myNumbers= [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map((num) => {return num + 10})
//console.log(newNums);

/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/



//Chaining of Methods : 

const newNums = myNumbers
                    .map( (num) => num * 10) //1st it will * by 10 
                    .map((num) => num + 1) //then add above result with +1
                    .filter( (num) => {return num >= 40}) //return only those which is >= 40 
console.log(newNums);

//This concept is called Chaining. 


