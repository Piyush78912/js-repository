let myDate = new Date();

console.log(myDate) //2024-12-19T14:45:57.503Z

console.log(myDate.toString())  //Coordinated

console.log(myDate.toDateString())  //Thu Dec 19 2024

console.log(myDate.toLocaleString())  //12/19/2024, 2:46:59 PM

console.log(myDate.toJSON()) //2024-12-19T14:47:29.758Z

console.log(myDate.getDate())  //19

console.log(typeof myDate)  //object

// Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.


console.log(myDate.getTime())  //1734620169728

//let myCreatedDate = new Date(2023,0,23);
let myCreatedDate = new Date(2023,0,23,5,3);
console.log(myCreatedDate.toLocaleString());  //1/23/2023, 5:03:00 AM

let timeStamp = Date.now();
console.log(timeStamp); //1734620513077
console.log(myCreatedDate.getTime())  //1674450180000
console.log(Math.floor(Date.now()/1000)) //1734621044

let newDate = new Date();

//Months always start from 0 which means Jan 
console.log(newDate.getDay()) //4
console.log(newDate.getMonth() + 1)  //12

console.log(newDate.toLocaleString('default',{
    weekday:'long',
    calendar:'myDate'
})) //Thursday
