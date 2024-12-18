//primitive: 
// 7 Types : 
// String
    const name  = "piyush";
// Number
    const score = 100
// boolean
    const isLoggedIn = false 
// null
    const outsideTemp = null
// undefined
    let userEmail;  // let userEmail = undefined both are same 
// Symbol 
    const id = Symbol('123')
    const another_id = Symbol('123')

    console.log(id == another_id) //false

// BigInt
    const integer = 54325432232n //for bigint write 'n' at last of number
    console.log(typeof(integer)) //bigint
/*
is javascript dynamically types language or not :
Ans: Yes JS is dynamically types languaged. 
//typescript language is also there which focus on type only.
*/


//References (Non-Primitive): 
//Array 
const heroes = ['Shaktiman','SuperMan','SpiderMan']

//Object
let myObj = {
    name:'Piyush',
    id:17
}

//Functions 

const myFunction = function(){
    console.log("Hello World");   
}

console.log(typeof(bigNumber)) //undefined
console.log(typeof(heroes)) //object
console.log(typeof(myFunction)) //function or function Object
console.log(typeof(id)) //symbol

/*
Important Note:
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
    
2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/