// const tinderUser = new Object()    //singleton object
const tinderUser = {}                 // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nilesh",
            lastname: "Humbe"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.firstname, regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // it is static method copies all enumerable (repetative/can be looped) own properties from one or more source objects to a target object. {} is target and other all are source

const obj3 = {...obj1, ...obj2}  // spread method and it is mostly used
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  // it returns array into array and give seperated key values pair in array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor);


// course.courseInstructor

const {courseInstructor: instructor} = course           // deconstructor of object value

// console.log(courseInstructor); 
console.log(instructor);  

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",          // json format
//     "price": "free"
// }

[
    {},
    {},
    {}
]