//Array Reduce Method 
/*

The reduce() method is an iterative method. It runs a "reducer" callback 
function over all elements in the array, in ascending-index order, and accumulates them into a single value.


In reduce method the callback function has the following arguments: 

1) accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

2) currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

3) currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.


*/
const myNums = [1,2,3,4];

//without Arrow Function 

const myTotalSum = myNums.reduce( function(previous_value,currentValue){
    console.log(`previous value: ${previous_value} and current value: ${currentValue}`);
    
    return previous_value + currentValue;
},0)

console.log(`Total Sum: ${myTotalSum}`);  //10

/*
previous value: 0 and current value: 1
previous value: 1 and current value: 2
previous value: 3 and current value: 3
previous value: 6 and current value: 4
Total Sum: 10
*/


//with Arrow function 
/*
const myTotalSum = myNums.reduce( (previous_value,currentValue)=> {
    return previous_value + currentValue
},0)

console.log(myTotalSum); //10 
*/


const shoppingCart = [
    {
        itemName: "js Course",
        price: 2999
    },
    {
        itemName: "py Course",
        price: 1999
    },
    {
        itemName: "Mobile Dev",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const totalBill = shoppingCart.reduce( (accumulator,currentItem) => {
    return accumulator + currentItem.price
},0)

console.log(`Total Bill: ${totalBill}`); //Total Bill: 23996


//Here Accumulator just takes initial value which is 0 as we write 
//so we add acculumator with currentItem.price(currentItem is current Value of Item and acculumator is previous value of item).