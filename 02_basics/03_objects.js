//singleton= An Object which is created by constructor is always Singleton
// Object
//ex = Object.create()
//--------------------------------------------------------------------

        //In this 03_objects.js we only learn about Object literals: 

//Creating Symbol and adding Symbol to the object 
//now add this in object 

const mySym = Symbol("key1");

//Object Literals: 

const JsUser = {
    name:"Piyush",
    "full name":"Piyush Khatri",
    age : 21,
    [mySym]:"mykey1", //mySym must always act as Key which is Symbol 
    //so to make Symbol as a key or if we want to use key as a symbol then  we must include this within [] brackets. 
    location:"Indore",
    email:"khatripiyush547@gmail.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","Tuesday"]
};

//ways to access object properties: 
console.log(JsUser.name)  //Piyush
console.log(JsUser["name"]) //Piyush it will always take as String format within " "

console.log(JsUser["full name"])  //Piyush Khatri

//accessing symbol value: 
console.log(JsUser[mySym])  //mykey1
console.log(typeof mySym)  //symbol

console.log(JsUser)

// {
//     name: 'Piyush',
//     'full name': 'Piyush Khatri',
//     age: 21,
//     location: 'Indore',
//     email: 'khatripiyush547@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Tuesday' ],
//     [Symbol(key1)]: 'mykey1'
//   }


//if we want to freeze the value and we want that the value will not be changed so we will use freeze() 

JsUser.email = "abc@gmail.com";

// Object.freeze(JsUser)  //Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "abc@microsoft.com";

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser ")
}
JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting())  //Hello JsUser 
console.log(JsUser.greeting)   //[Function (anonymous)]

console.log(JsUser.greeting2())  //Hello JS User, Piyush
console.log(JsUser.greeting2); //[Function (anonymous)]


//Summary: 
//we can access objects by two ways : by using [] which means we are accessing values because it is in key-value format 
//and we can also access objects by using . operator just like our normal use // but sometimes we use only [] to access objects as we saw before 
//At the time of accessing symbol when it is declared inside Object.

