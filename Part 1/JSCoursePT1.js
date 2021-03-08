// Welcome to the JS Fundamentals Tutorial!!!!

//helper methods
document.write("hello beautiful")
document.write(2 + 2)
// alert("I am an alert in the browser!")
console.log("inspect the console to answer all your questions")
console.log({ name: "Austin" })

//statements = set of instructions
// comments shorcut = command /

/*
here is a multi-line comment
oh yeah 
*/
// variables! var is the old way use let for es6 syntax

//variables are case sensitive, cannot start with number, we use camelCase or under_scores
let firstName = "Austin"
var secondName = "Evans"
console.log(firstName)
console.log(secondName)

let address, zip, state

address = "1010 Binary Street"
zip = 101010
state = "CO"
console.log(zip)
//lets and variables can be reassigned
// firstName = "Austin New"
// shows how variables are case sensitive
let firstname = "someone different entirely"
console.log(firstname)
console.log(firstName)

//const are for values that will not be reassigned
const cantChange = "I will not be reassinged!!!!"
console.log(cantChange)

// whats the difference between '' and ""
// there is no difference! dont listen to tweets its personal preference

// string concatenation = combine string values uses + <--- sign
console.log("Hello there your full name is :" + firstName + " " + secondName)

// `` - backticks (template strings) = easier/ better option
console.log(`Hello there your full name is : ${firstName} ${secondName}`)

//js is loosely typed = dont declare types!
const number = 2.3333
let banana = 8
banana = "is delicious"
console.log(banana)

//implicit type conversion
let numberString = "10"
let number2String = "2"
const result = numberString - number2String
console.log(result)
// the result is of type number thanks to implicit type conversion

const result2 = numberString + number2String
console.log(result2)
// result is 102 because the plus sign is the symbol for string concatenation
// if you see in your console numbers showing up in black and not blue that number or result
// is a string

// data types
// primitive = string, number, boolean, null, undefined and symbol
// object = arrays, function, objects