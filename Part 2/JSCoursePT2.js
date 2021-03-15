// Part 2 lesson 1

// Template Literals - es6+
// Backtick characters `` - above tab
// Interpolation = ${} - insert expression aka value

const firstName = "Austin"

const value3 = `Hello it's your teacher ${firstName}`
console.log(value3)
// you can perform operations in interpolation
const simpleMath = `What is 4 + 4? ${4 + 4}`
console.log(simpleMath)


// Array methods and for loop together
const namesList = ['Anna', 'Susy', 'Bob', 'John']
const lastNameForAll = 'Codington'
let newArray = []

for(let i = 0; i < namesList.length; i++){
  console.log(i)
  console.log(namesList[i])
  newArray.push(`${namesList[i]} ${lastNameForAll}`)
}
console.log(newArray)


// Functions, return, if, arrays and for loop together

const gas = [20, 40, 100, 30]
const food = [10, 40, 50]
// Function works with any array you want
const calculateTotal = array => {
  let total = 0
  for(let i = 0; i < array.length; i++){
    total += array[i]
  }
  if(total > 100){
    console.log('Whoa you are spending way to much')
    return total
  }
  console.log('You are good total is less than 100')
  return total
}
const foodTotal = calculateTotal(food)
const gasTotal = calculateTotal(gas)

console.log({
  gas: gasTotal,
  food: foodTotal,
})