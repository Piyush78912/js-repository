//for 
for (let i = 0; i <= 10 ;i++) {
    const element = i;
    if(element === 5){
      //  console.log("5 is the best number")
    }
   // console.log(element)
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer Loop value: ${i}`)
    for (let j = 1; j <=10; j++) {
        //console.log(`Inner Loop value ${j} and Outer Loop ${i}`)
        //console.log(i + '*' + j + ' = ' + (i * j))
    }
}

let myArray = ["flash","Batman","superman"]
// console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}


//break and continue: 


//Example of Break statement: 

for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}

//Example of continue
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Skipped 5 and continue with next iteration`);
        continue; 
    }
    console.log(`Value of i is ${index}`);
}