//Now lets see how we can iterate over Objects: 
//By Using for-in Loop: 
/* 
The for...in statement iterates over all enumerable string properties of an object
*/
const myObject = {
    'js' : 'JavaScript',
    'cpp': 'C++',
    'py' : 'Python',
    'Php':'HyperText Preprocessor'
}
for (const key in myObject) {    
    //console.log(`${key} : ${myObject[key]}`);   
}

///we can also iterate over array from for-in loop

const arr = ["js","python","java","cpp"]
for (const values in arr) {
   // console.log(arr[values]);
    
}

const map = new Map();

map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('IN','India')

for (const key in map) {
    console.log(key); //here we will not perform iteration in Map so output will be empty
}