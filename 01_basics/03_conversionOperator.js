let score = "Piyush"
//console.log(typeof(score))
let valueInNumber = Number(score); //string
// console.log(typeof(valueInNumber)) //number 
// console.log(valueInNumber) //Nan (Not a Number)


// "33" => 33 can be convert easily 
// "33abc" => NaN
//true => 1; false = 0

let isLoggedIn = "Piyush";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)  //true


//1 => true  0 =>false
// "" =>false
// "piyush" => true  


let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);  //3 
console.log(typeof(stringNumber));  //3 


/*              Operators       */

//Arithmetic Operator
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

console.log("Piyush" + " Khatri")
console.log(2+"2")//22
console.log("2"+2)//2
console.log("2"+"2")   //22
console.log(2+2+"2")  //42

let value = 3
let negValue = -value 
console.log(negValue)//-3

console.log((2+2) * (3 % 4)) //12
console.log(+true)  //1


//typical assignment
let num1 = num2 = num3 = 2 + 2
console.log(num3); // 4
console.log(+"")  //empty string will be converted into 0 becuse arithmetic
//operation is applied in it and empty string means false // res = 0

let gameCounter = 100
gameCounter++;
console.log(gameCounter);  //101


