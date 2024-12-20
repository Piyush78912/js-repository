function printName(){
    console.log("Hello My Name is Piyush")
}
function printUserName(userName){
    console.log(`Hello ${userName}`);
}
printName()

printUserName("Shanu");

function addTwoNumbers(num1,num2){
    // let num3 = num1 + num2;
    // return num3;
     return num1+num2;
}

//console.log('Addition of Two Numbers is: ' + addTwoNumbers(2,3))
//or 
let res = addTwoNumbers(2,3);
console.log(res);

function loginUserMessage(userName){
    if(userName == undefined){
        console.log("Please Enter a user Name!")
        return; //used to return function call if we not return then another return statement will also execute with undefined as userName so yeah must use return statement without returning anything if there is more code after this if block
    }
    return `${userName} just Logged In.`;
}

//console.log(loginUserMessage()); // Please Enter a user Name!
console.log(loginUserMessage("Piyush"))


//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
//here ...num1 can accept any number of arguments 
//sometimes rest parameter also known as spread operator as we used earlier

function calculateCartPrice(...num1){
    return num1;
}

//console.log(calculateCartPrice(200,300,100,400));

const user = {
    userName: "Piyush",
    age : 21
}

function handleObject(anyObject){
    console.log(`Hello ${anyObject.userName} your age is ${anyObject.age}`);
}

//handleObject(user); //Hello Piyush your age is 21
//OR
handleObject({
    userName:"Ram",
    age:'22'
})  //Hello Ram your age is 22



//Now lets see about how can we pass array to functions: 
const myNewArray = [100,200,300]

function returnSecondValue(getArray){
    return `Array Second Value is: ${getArray[1]}`;
}

//console.log(returnSecondValue(myNewArray));//Array Second Value is: 200
            //OR 
console.log(returnSecondValue([100,200,300])); //Array Second Value is: 200



