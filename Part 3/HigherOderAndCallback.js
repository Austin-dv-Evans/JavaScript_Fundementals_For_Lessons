// Higher Order Functions, Callback Functions
// Functions as First Class Objects / Citizens

// Functions are first class objects - stored in a variable (expression)
// passed as an argument to another function, return from the function (closure)

// Higher Order Function - accepts another function as an argument
// or returns another fucntion as a result

// Callback Function - passed to another function as an argument
// and executed inside that function

const morning = firstname => {
  return `Good morning ${firstname.toUpperCase()}`
}
const afternoon = firstname => {
  return `Good afternoon ${firstname.toUpperCase()}`
}
const greet1 = (firstname, cb) => { // this is the higher order function
  const myName = 'Austin'
  console.log(`${cb(firstname)}, my name is ${myName}`)
}

greet1('bobo', morning) // dont invoke here we decide where to invoke within HOF
greet1('susy', afternoon)


const greet = (firstName, myName, timeOfDay) => {
  console.log(`Good ${timeOfDay} ${firstName}, my name is ${myName}`)
}
greet('john', 'austin', 'evening')

const greetMorning = firstName => {
  const myName = 'Austin'
  console.log(`Good morning ${firstName}, my name is ${myName}`);
}
greetMorning('John')