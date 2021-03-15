// Part 2 lesson 2

// Array properties! there are a bunch look them up!

let names = ["Austin", "Renee", "Luna", "Jerry", "Berry"]
//length
console.log(names.length) // 5
// access item at index
console.log(names[2]) // Luna
console.log(names[5]) // undefined
// access item of array with index and math
// remember length and index are different, index starts with 0
console.log(names[names.length - 2]) //Jerry 5 - 2 = 3
// concat two arrays together
const foods = ["Pepper", "Onion", "Banana"]
const allNames = names.concat(foods)
console.log(allNames)
// reverse th order
console.log(allNames.reverse())
//unshift's parameter is the item to be inserted into beginning of array
allNames.unshift("Billy")
console.log(allNames)
//shift
allNames.shift() // removes one item from beginning of array bye bye Billy
console.log(allNames)
// pop removes from end
// push adds to end

// splice mutates the original array
// two arguments first is starting index and the second is remove count
// splice returns the removed items, I started with index one, delete count 2
// onion and pepper are now in their own new array
const specificNames = allNames.splice(1, 2)
console.log(specificNames) // >> ["Onion", "Pepper"]
// array has been mutated
console.log(allNames) // ["Banana", "Berry", "Jerry", "Luna", "Renee", "Austin"]
