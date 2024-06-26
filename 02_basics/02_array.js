const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   // using push it insert mentioned array same as it is into the existing array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)  //using concat it merged all values into new array and not in existing array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // using this it spread the multiple arrays and give it in single array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // using flat, it returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))  // it convert values into array
console.log(Array.from({name: "hitesh"})) // interesting. it will give empty array. in this case we need to specify by using what array should be made like by key or its value.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // using of it converts values into array.