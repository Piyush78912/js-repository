// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.

/*
Syntax of IIFE: 
(function () {
     // …
   })();

*/
//Named IIFE
(function chai(){
    console.log("DB Connected Successfully!");  //DB Connected Successfully!
})();  //here semi-colon indicates that function call is ended 


// here we can also pass name in IIFE just like this example: 
//please remember it we'll use this in React

//UnNamed IIFE
( (name) =>{
    console.log(`DB Connected Two ${name}!!`)  //DB Connected Two Piyush!!
})("Piyush");  

//So In Short We can write Two IIFE in this way 
