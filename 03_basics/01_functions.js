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
        return; //used to return function call if we not return then another return statement will also execute with undefined as userName
    }
    return `${userName} just Logged In.`;
}

//console.log(loginUserMessage()); // Please Enter a user Name!
console.log(loginUserMessage("Piyush"))




