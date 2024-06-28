// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr);

// Array methods

// myArr.push(6)  it push the value in existing array permenantly
// myArr.push(7)
// myArr.pop()    it remove the last value from the array

// myArr.unshift(9)   it add the value to the start
// myArr.shift()      it remove the first value of the array

// console.log(myArr.includes(9));  these are the questionnare method and it gives ans in true or false.
// console.log(myArr.indexOf(3));   if we asked for the non-existing index value it will always return -1 as an ans.

// const newArr = myArr.join()    it change the dtype of it, i.e. from array to string

// console.log(myArr);
// console.log( newArr);


// slice, splice  

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // in slice it returns the value which is in mentioned in range excluding the mentioned 2nd value

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // in splice it manipulates the original array and remove the splice mentioned range value and that exclude range values returns in splice.
console.log("C ", myArr);
console.log(myn2);