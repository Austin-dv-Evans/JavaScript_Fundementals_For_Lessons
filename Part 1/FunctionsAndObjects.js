// Functions
const hello = () => {
  console.log("This is inside a function!!")
  console.log("This is also inside a function!!")
}
// don't forget to invoke the function!
hello()
//functions with arguments
const helloSpecificlly = (person) => {
  console.log("This is a hello inside a function to: " + person)
}
// careful what you pass in, javascript wants to work with whatever it can both of these work..
helloSpecificlly("Austin")
helloSpecificlly(001110)

// calculate width and height in cm from inches
const calculate = (value) => {
  const newValue = value * 2.54
  console.log("The value in cm is : " + newValue)
  return newValue
}
const width2 = calculate(200)
const height2 = calculate(50)

const calculateRefactor1 = (value) => {
  return value * 2.54
}
const calculateRefactor = (value) => value * 2.54

const width = calculateRefactor(100)
const height = calculateRefactor(20)

const dimensions = [width, height]

console.log(dimensions)

//Objects - key/value pairs and methods
// dot notation

const person = {
  name: "Austin",
  age: 29,
  education: true,
  married: true,
  siblings: ["Daniela", "Barrett", "Dom", "Bobby", "Chrissy"],
  greeting() {
    console.log("Hello I am a function stored in an object!")
  },
}
console.log(person.married)
console.log(person.siblings[1])
person.greeting()
const age = person.age
console.log(age)

// coditional statements
// comparison operators
// <, >, >=, <=, ==, ===. !=, !==
// else if and !
// == checks only value
// === checks value and type

const num1 = 6
const num2 = "6"

const value = num1 == num2
const value2 = num1 === num2

console.log(value) // true
console.log(value2) // false

// logical operators
// || = or          && = and          ! = not

const nameBob = "bob"
const age3 = 29

if (nameBob === "bob" || age3 === 20) {
  console.log("Hello or operator") // runs
} else {
  console.log("not bob or 20")
}

if (nameBob === "bob" && age3 === 20) {
  console.log("Hello and operator")
} else {
  console.log("not bob and 20") // runs
}
