//Instead of using if else else if for multiple conditions we will use switch statements 

//syntax: 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 6;
switch(month){
    case 1:
        console.log("Jan");
        break;
    
    case 2:
        console.log("Feb");
        break;
    
    case 3:
        console.log("March");
        break;
    
    case 4:
        console.log("April");
        break
    case 5:
        console.log("May");
        break
    case 6:
        console.log("Jun");
        //break
    default:
        console.log("Default executed");
}  
//Output: 
// Jun
// Default executed

//The Reason of Output is we forgot to put break statement in case 6
//which is the reason of fall through 

/*


In switch statements, if you don't include a break statement after a case, the execution will "fall through" to the next case and continue executing all subsequent cases until it either:

Hits a break statement, or
Reaches the end of the switch block

*/