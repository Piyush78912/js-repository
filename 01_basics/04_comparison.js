console.log(2 < 2)
console.log(2 <= 2)
console.log(2 >= 2)
console.log(2 > 2)
console.log(2 == 2)
console.log(2 != 2)

console.log("2" > 1);
console.log("02" > 1);


// *************Very IMP Note ****************:
/*
Equality check == and comparions > < >= <= work differently.
*/

//console.log(null > 0); //false
/*

console.log(null >= 0);//true because here comparion convert null to a 
number ,treating it as 0. thats why null >= 0 is true and null > 0 is false

*/
 console.log(null == 0);//false

// console.log("Comparision with undefined")
// console.log(undefined > 0);  //false
// console.log(undefined >= 0); //false
// console.log(undefined < 0);//false
// console.log(undefined <= 0);//false
// console.log(undefined == 0);//false
// console.log(undefined != 0);//true


//strict check operator (===): it checks with data types
console.log("example of === operator")
console.log("2" == 2) //true
console.log("2" === 2) //false




