//For each Loop: 
/*
The forEach() method of Array instances executes a provided function once for each array element.
*/

/*
Note: This foreach loop takes call back function as an Argument and 
the callback function can be any function type like = normal function,arrow function,IIFE etc
*/

const coding = ["js","ruby","java","python","cpp"];

coding.forEach(function(item){
    //console.log(item);  
}) 
/*
js
ruby
java
python
cpp
*/

//we can also use arrow function: 
coding.forEach( (items) => {
    console.log(items);
})


/*
js
ruby
java
python
cpp
*/

/*
function printMe(item){
    console.log(item);
}

//This will take normal function as argument,shortest way .
coding.forEach(printMe)

*/
/*
Output: 
        js
        ruby
        java
        python
        cpp

*/
//In foreach loop the callback function can take following arguments: 
//foreach(element,index,array)
coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

/* Output: 

js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/


//Now Let's see how can we traverse object which is inside array
//this is very imp this is the way we will use most in react when we want to fetch data from database .

const myCoding = [
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"Javascript",
        languageFileName:"js"
    }
];

myCoding.forEach((item) => {
    console.log(item.languageName, ":-" , item.languageFileName)
})

/*
Java :- java
python :- py
Javascript :- js
*/