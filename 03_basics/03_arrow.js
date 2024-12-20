const user = {
    userName:"Piyush",
    age:21,
    welcomeMessage:function(){
        console.log(`${this.userName}, welcome to website`)
        // console.log(this);
    }
 }
// user.welcomeMessage()
// user.userName = "Ram"
// user.welcomeMessage()
console.log(this)  //{}

//Note = Browser have bydefault Window Object


// function chai(){
//     let userName = "Piyush";
//     console.log(this.userName) //undefined
// }
// chai()

// const chai = function(){
//     let userName = "Piyush";
//         console.log(this.userName) //undefined
//     }
// chai()

                            //Arrow function

const chai = () =>{
    let userName = "Piyush";
    console.log(this) //{}
}

chai()


// const addTwo= (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(2,3))

                    //Pure Arrow Function

//const addTwo= (num1,num2) => (num1+num2); //arrow function can also be written like this in short way if we want to return only single value just like we write {} in case of if-else statement


// console.log(addTwo(2,3))  //5


const addTwo = (num1,num2) =>({userName:"Ram"}); //you must write object inside curly braces {} inside function body otherwise we'll get error 


console.log(addTwo(2,3))  //{ userName: 'Ram' }