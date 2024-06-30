const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);               // here this is used as current context that holds the current value of {}
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){                                        // this is cannot used directly in the function. it has to be declare object values first.
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {                            // it will returned undefined, as the object value is not declare first.
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {                              // 
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {               // basic arrow function
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2          // implicity return

// const addTwo = (num1, num2) => ( num1 + num2 )       // this method is used mostly in react

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()