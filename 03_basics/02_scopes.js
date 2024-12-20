
let p = 200;
if(true){
    let p = 300;
   // var a = 10; //can be accessible to any block inside or outside which will create problems in scope for developers so developers  use 'var' very rare and avoid 'var' keyword for declaring variable.
    //let b = 20;
    //const c = 30;
    //d = 40; //same as var which is also avoided because of above reason
    console.log("Inner P: " + p); //Inner P: 300
}
//console.log(a);//10 
//console.log(b);
//console.log(c);
//console.log(d)//40
console.log("Outer P: " + p) //Outer P: 300

//Note: Scope which is present in Inspect for web page  and Scope which is Code Environment Scope(In VS Code) both are different just remember it for interview

