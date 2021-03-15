// Part 2 lesson 3

// Functions, return, if, arrays and for loop together

const gas = [20, 40, 100, 30]
const food = [10, 40, 50]
// Function works with any array you want
const calculateTotal = (array) => {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i]
  }
  if (total > 100) {
    console.log("Whoa you are spending way to much")
    return total
  }
  console.log("You are good total is less than 100")
  return total
}
const foodTotal = calculateTotal(food)
const gasTotal = calculateTotal(gas)

console.log({
  gas: gasTotal,
  food: foodTotal,
})
