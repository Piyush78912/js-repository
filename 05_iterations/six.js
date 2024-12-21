//const coding  = ["js","python","java"];

// const values = coding.forEach( (item) =>{
//     //console.log(item);
//     return item;
// })

// console.log(values)  //undefined
//here foreach loop does not return anything that's why we get undefined as output 

//-----------------------------------------------------------------------

                    //Filter 
/*
The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/

const myNums = [1,2,3,4,5,6,7,8,9,10]

//let newNums = myNums.filter((num) => {return num > 4}) //if we include code inside {} then we must use return keyword to return value otherwise dont add{} and simply write condition . 

// console.log(newNums);

//now using for each loop for same as above result 
//both are easy to understand ..choose anyone of your choice
const newNums = []

myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num);
    }
})
// console.log(newNums)  //[ 5, 6, 7, 8, 9, 10 ] 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //finding only history books details:
  /*
  const userBooks = books.filter( (bk) => {return bk.genre === "History"});
  console.log(userBooks);
  
  */

  /*
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
  */
  

//Finding Books details whose year is above 2000 
//let userBook = books.filter( (bk) => {return bk.publish >= 2000})
// console.log(userBook);


/*
[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
*/

//find book details whose publish year is 2000 and book must be history

let userBook = books.filter( (bk) => {return bk.genre === "History" && bk.publish >= 1995})
console.log(userBook);

/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/
