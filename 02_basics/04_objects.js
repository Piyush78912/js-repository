//const obj1 = new Object(); //singleton object
//or
//const obj1 = {} //Non-Singleton User 
// console.log(obj1)   //{} 

const tinderUser = new Object();

tinderUser.id = "12"
tinderUser.name = "abc"
tinderUser.isLoggedIn = false

console.log(tinderUser);  //{ id: '12', name: 'abc', isLoggedIn: false }

const regularUser = {
    fullname: {
        userfullName:{
            firstName:"Piyush",
            lastName:"Khatri"
        }
    }
}

console.log(regularUser.fullname?.userfullName.firstName); //Piyush
//here question mark ? checks if fullname attribute is exists or not 
//basically it provides protection so that we'll not get error 


const obj1 = {
    1:'a',
    2:'b',
    3:'c'    
}
const obj2 = {
    4:'d',
    5:'e',
    6:'f'
}

//const obj3 = {obj1,obj2}

//const obj3= Object.assign({},obj1,obj2) //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
//here {}(which is optional) is target and obj1,obj2 are sources


//we can also use spread... operator in Objects also just like we use in array
obj3 = {...obj1,...obj2} //using spread operator (most commonly used and latest one)

//console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users = [
    {
        name:'Piyush',
        email:'p@gmail.com'
    },
    {
        isLoggedIn:true,
    },
    {
        age:21
    }
];
// console.log(tinderUser)

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true//Determines whether an object has a property with the specified name.
//commonly used in all projects to check whether user is logged In or not

//for getting only keys: 
//Object.keys(): Returns the names of the enumerable string properties and methods of an object.

//Object.values(): Returns an array of values of the enumerable own properties of an object

// console.log(Object.keys(tinderUser)) //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) //[ '12', 'abc', false ]
// console.log(Object.entries(tinderUser))
/*
[ 
    [ 'id', '12' ], [ 'name', 'abc' ], [ 'isLoggedIn', false ]
]

*/

const course = {
    courseName:"js in Hindi",
    price:1999,
    InstructorName:"Hitesh"
}
//console.log(course.InstructorName) //Hitesh

//Destructuring of Object most commonly used in React => 

    const {InstructorName:instructor} = course; //here we change InstructorName to Name by specifying it within {} this is called Destructring of Object.
    // console.log(InstructorName);  //Hitesh
    console.log(instructor) // Hitesh here InstructorName is changed to name

    //lets see how can we destructure of object in React
    /*
    
    const navbar = ({company}) => {

    }
    navbar(company = "hitesh")


    */
   //Note: We can also destructure array but most rarely we do 


   //JSON(JavaScript Notation) always comes in Object or array format 
   //dont assume it is object 

   //ex=> 
    /*
    JSON in Object format
    {
        "name" : "Piyush",
        "age" : 21,
        "Course" : "BCA"
    }

    JSON in Array Format: Array can also contain Objects
    [
            {},
            {},
            {},
    ]

    example of JSON Demo : 
    {
    "results": [
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Camilla",
                "last": "Nyrud"
            },
            "location": {
                "street": {
                    "number": 1083,
                    "name": "Nedre Stabburvei"
                },
                "city": "Blomvåg",
                "state": "Nordland",
                "country": "Norway",
                "postcode": "2953",
                "coordinates": {
                    "latitude": "40.5931",
                    "longitude": "50.8488"
                },
                "timezone": {
                    "offset": "+9:00",
                    "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                }
            },
            "email": "camilla.nyrud@example.com",
            "login": {
                "uuid": "292d1907-a158-4d0c-85c2-ca8c79bbf498",
                "username": "blacksnake684",
                "password": "ronald1",
                "salt": "euF2bVIu",
                "md5": "4ddc45d817fdadf3be9512f7295c7611",
                "sha1": "0892deca5f892f427b66418bcd95e7f42560a306",
                "sha256": "3231af44692ea782043f018c089f6d868840e9e3f0eb3f54dcb930bd5e6c9ff0"
            },
            "dob": {
                "date": "1974-06-13T21:08:58.331Z",
                "age": 50
            },
            "registered": {
                "date": "2017-09-28T01:01:03.426Z",
                "age": 7
            },
            "phone": "66692556",
            "cell": "40252067",
            "id": {
                "name": "FN",
                "value": "13067410062"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/43.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
            },
            "nat": "NO"
        }
    ],
    "info": {
        "seed": "d9baa286a222d282",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
}
   */