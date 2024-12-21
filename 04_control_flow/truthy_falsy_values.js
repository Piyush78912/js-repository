const userEmail = ""

if(userEmail){
    console.log("Got User Email!!")
}else{
    console.log("Don't have user Email!!")
}


//lets see falsy values: 
/*
1)null
2)undefined
3)NaN
4)""
5)0
6)-0
7)0n(BigInt)
8)false
9)document.all(The only falsy object in JavaScript is the built-in document.all)

Let's See Truthy Values : 
(true)
({})
([])
(42)
("0")
("false")
(new Date())
(-42)
(12n)
(3.14)
(-3.14)
(Infinity)
(-Infinity)
function() {}

*/

if(userEmail.length === 0){  // 0 === 0 here useremail is false which is 0 
    console.log("user email is empty!!") //user email is empty!!
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty!!")  //Object is empty!!
}


//Nullish Coalescing Operator(??) : null undefined
/*

The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

*/

const foo = null ?? 'default string';
console.log(foo);  //default string 

const p = 10 ?? 'Piyush'
console.log(p)  // 10 

const q = 70 ?? 20 ?? undefined

console.log(q) //70    
