// Variable Lookup
// {} - code block

const globalNumber = 5

const add = (num1, num2) => {
  const globalNumber = 20
  const result = num1 + num2 + globalNumber
  const multiply = () => {
    const globalNumber = 10
    const multiplyResult = result * globalNumber
    console.log(multiplyResult); // --> 270
  }
  multiply()
  return result
}

console.log(add(3,4)); // --> 27

// this shows that javascript will look for a global varible outside the function
// but will never look into a function

