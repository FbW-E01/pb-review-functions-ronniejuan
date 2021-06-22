// # Review 5 - Functions

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Write a normal function that takes in two numbers and *returns* the sum of those numbers.

function nomad(x,y){
    console.log(x +y)
    return x +y;
}
    nomad(5,3);

// 2. Write a normal function that takes in a string and *returns* that string capitalized.


function letter (x){
    return x.toUpperCase()
}
console.log(letter("hello"))

// 3. Write a normal function that takes in an array and *returns* the last item in that array.


function returnLast(animals){
    return animals.slice(3)
}

const animals = ["dog","mouse","elephant","mirlo"]
console.log(returnLast(animals))


// 4. Write an arrow function that takes in an array and *returns* the first item in that array.

const firstItem = array => {
return array.shift(0)
}
const mixArray2 = ["Hummus", 1, 43, "say", 6242, false];
console.log(firstItem(mixArray2));

// 5. Write an arrow function that takes in a string and *returns* the last three characters of that string

// const lastThree =  string => string.slice(string.length -3 ,string.length)

// console.log(lastThree("Ridiculous"))


const arrowFuncky = (string) =>{
    return string.slice(string.length -3)
}

const word = "Tower";
console.log(arrowFuncky(word))




// 6. Write an arrow function that takes in an array and *returns* the type of the *firstItem* in that array.

const firstItemType = array => typeof array[0];

console.log(firstItemType(animals));

// 7. Write an arrow function that takes in an array and *returns* true, if all items in that array have the same type.

const sameType = string => string.every(i =>typeof i==typeof string[0]);
console.log(sameType(animals))
console.log(sameType(mixArray2))
const numbers =[1,2,35,865]
console.log(sameType(numbers))


// 8. Print the `type` of a variable that has a normal function value.

console.log(typeof mixArray2)

console.log(typeof numbers)

// 9. Print the `type` of a variable that has an arrow function value.

console.log(typeof arrowFuncky)
console.log(firstItemType)

// 10. Write and test a function that takes in *two parameters* (min and max). That function should return another function that doesn't take in any parameters, but returns a random number between min and max. Effectively your "outer" function is a factory that creates customized random number generator functions.

const createRandomNumber = (min, max) =>  {
    function number() {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return number();
}
console.log(createRandomNumber(5, 86))

// 11. In your own words, explain what are side effects and what is a pure function.
// 12. In your own words, explain what is the difference between functions and methods.


// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// ` `

// [🐹](https://hamster.dance/hamsterdance/)
