//const obj1 = new Object(); //singleton object
//or
//const obj1 = {} //Non-Singleton User 
// console.log(obj1)   //{} 

const tinderUser = new Object();

tinderUser.id = "12"
tinderUser.name = "abc"
tinderUser.isLoggedIn = false

console.log(tinderUser);  //{ id: '12', name: 'abc', isLoggedIn: false }

const regularUser = {
    fullname: {
        userfullName:{
            firstName:"Piyush",
            lastName:"Khatri"
        }
    }
}

console.log(regularUser.fullname?.userfullName.firstName); //Piyush
//here question mark ? checks if fullname attribute is exists or not 
//basically it provides protection so that we'll not get error 


const obj1 = {
    1:'a',
    2:'b',
    3:'c'    
}
const obj2 = {
    4:'d',
    5:'e',
    6:'f'
}

//const obj3 = {obj1,obj2}

//const obj3= Object.assign({},obj1,obj2) //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
//here {}(which is optional) is target and obj1,obj2 are sources


//we can also use spread... operator in Objects also just like we use in array
obj3 = {...obj1,...obj2} //using spread operator (most commonly used and latest one)

//console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users = [
    {
        name:'Piyush',
        email:'p@gmail.com'
    },
    {
        isLoggedIn:true,
    },
    {
        age:21
    }
];
console.log(tinderUser)

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true//Determines whether an object has a property with the specified name.
//commonly used in all projects to check whether user is logged In or not

//for getting only keys: 
//Object.keys(): Returns the names of the enumerable string properties and methods of an object.

//Object.values(): Returns an array of values of the enumerable own properties of an object

console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) //[ '12', 'abc', false ]
console.log(Object.entries(tinderUser))
/*
[ 
    [ 'id', '12' ], [ 'name', 'abc' ], [ 'isLoggedIn', false ]
]

*/


