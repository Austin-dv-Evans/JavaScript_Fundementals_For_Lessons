// Part 4 lesson 1
// The Math Object
// Standard - Built-in objects are always availible
// anywhere in out application without extra setup

const number = 4.567
const numberArray = [1, 2, 5, 16, 25, 33, 69]

// floor - rounds down
const result = Math.floor(number)
console.log(result)

// ceil = ceiling which rounds up
console.log(Math.ceil(number))

// sqrt = square root
const numberTwo = 64
console.log(Math.sqrt(numberTwo));
// document.write(Math.sqrt(numberTwo))

// PI
// document.write(Math.PI)
console.log(Math.PI)
// Min and Max finds minimun or maximum in a range

const minimum = Math.min(1, 2, 5, 16, 25, 33, 69)
console.log(minimum);

console.log(Math.max(1,3,5,7,9,13,15,17,27,38,99))

// my favorite Random! 

// Math.random always returns a random number between 0 and .999999999(infinity)
console.log(Math.random())
// multiplying by ten now you get a random number between 0 and 9.9999(infinity)
console.log(Math.random() * 10)
// chain them together now we get a random number between 0 and 10
console.log(Math.floor(Math.random() * 10) + 1)
// or we could round up and omit the + 1 
console.log(Math.ceil(Math.random() * 10))

