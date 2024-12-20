
let p = 200;
if(true){
    let p = 300;
   // var a = 10; //can be accessible to any block inside or outside which will create problems in scope for developers so developers  use 'var' very rare and avoid 'var' keyword for declaring variable.
    //let b = 20;
    //const c = 30;
    //d = 40; //same as var which is also avoided because of above reason
    // console.log("Inner P: " + p); //Inner P: 300
}
//console.log(a);//10 
//console.log(b);
//console.log(c);
//console.log(d)//40
// console.log("Outer P: " + p) //Outer P: 300

//Note: Scope which is present in Inspect for web page  and Scope which is Code Environment Scope(In VS Code) both are different just remember it for interview


//Nested Scope 
function one(){
    const userName = "Piyush"
    function two(){
        const website = "Youtube"
     //   console.log(userName);
    }
  //  console.log(website); //ReferenceError: website is not defined
    two()
}

one()

if(true){
    const userName = "Piyush"
    if(userName === "Piyush"){
        const website = " Youtube"
        // console.log(userName + website);  Piyush Youtube
    }
    //console.log(website); //ReferenceError: website is not defined
}
// console.log(userName); //ReferenceError: userName is not defined

addOne(5);
function addOne(num){
    return num+1;
}



//addFive(5) //ReferenceError: Cannot access 'addFive' before initialization

const addFive =  function(num){
    return num+5;
}
addFive(5); //allowed 
