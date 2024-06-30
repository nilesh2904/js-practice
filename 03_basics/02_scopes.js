//var c = 300
let a = 300                          // it is a global scope
if (true) {                          // it is a block scope written inside of {}
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);             // the console of first function can be execute inside it's inner function as well as it's own function.
    }
    // console.log(website);               // it will give error as it is outside the 2nd function

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// in this method we can call function early, and it will execute

console.log(addone(5))                 

function addone(num){
    return num + 1
}



// In this method we cannot call function early, as we are storing function into the variable, it should be called after.

const addTwo = function(num){                      
    return num + 2
}

console.log(addTwo(5))