//if statement 
const temperature = 13;
if(temperature === 3){
    console.log("Temperature is equal to 3")
}else{
    console.log("Temperature is not equal to 3")
}
console.log("Code Executed")


// < <= >= > != !== == === 

const score = 200

if(score > 100){
    let power = "fly";
    console.log(`User Power: ${power}`)
}
// console.log(`User Power ${power}`);  //power is not defined // it has local scope


//Multiple conditions using if-else else if statements

const balance = 1000;

if(balance < 500){
    console.log("Balance is less than 500")
}else if(balance < 750){
    console.log("Balance is less than 750")
}else if(balance < 900){
    console.log("Balance is less than 900")
}else{
    console.log("Balance is less than 2000")  //Balance is less than 2000
}


//Note: 
//Dont write like this:  this will consider as bad practise.... 
//if(balance > 500) console.log("test"),console.log("test2")



//for multiple conditions checking we'll use Logical Operators: 

    //Logical And 
const userLoggedIn = true;
const debitCard = true;

if(userLoggedIn && debitCard){
    console.log("User Logged In!!")  //User Logged In!!
}else{
    console.log("User Not Logged In!!")
}

//Logical OR 
const loggedInFromGoogle = true; 
const loggedInFromEmail = false;

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged IN!")
}else{
    console.log("User doesn't logged In!")
}
