// the no of line code written is dump into the package, we can call this package copies where ever any n no of times we want.


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()             //sayMyName is reference and () is execution

// function addTwoNumbers(number1, number2){                                // number1, number2 are parameters, anything passes in () while declaring function are parameter

//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4)                                                     // 3 and 4 are arguments, anything passes in () while calling function are arguments

function addTwoNumbers(number1, number2){                           

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){      // here in function ... work has a rest operator, in which if multiple value are passed then it include all values and return  it in array.
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));