//While Loop 

let index = 0
while(index <= 10){
   // console.log(index);
   // index++;
   index += 2;
}
/*
Output: 
0
2
4
6
8
10
*/
let myArray = ['flash','superman','batman','spiderman']
let arr =0;
while(arr < myArray.length){
  //  console.log(`Value of arr is: ${myArray[arr]}`)
    arr++; // arr = arr + 1
}

/*
Output: Value of arr is: flash
Value of arr is: superman
Value of arr is: batman
Value of arr is: spiderman
*/

//Do While Loop:
let score = 11;
do {
    console.log(`Score is: ${score}`)
    score++;
} while (score <= 10);