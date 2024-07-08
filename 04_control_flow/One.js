// Control flow: code should be run on conditional based, for ex, if you are login then some code should be run and if logout then some code should be run. this is control flow.

// if
//const isUserloggedIn = true
//const temperature = 41gbcvb

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {fhvhmv
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, === (using this it also check datatype), !==



// Example of block scope, the power is called outside the {} brackets, it will give error, but if we use var then it will execute, as it works as global func
// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// Implicit scope eample, if we dont use {} brackets and write directly console.log, it will consider it has scope, but it is written in single line.
// using , we can write in second line, but it is not recommended.

const balance = 1000
if (balance > 500) console.log("test"),console.log("test2");



if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750") 
} else if (balance < 900) {
    console.log("less than 750") 
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
} else{
    console.log("Not Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}