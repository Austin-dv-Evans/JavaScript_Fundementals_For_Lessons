// Part 3 lesson 1

// Reference vs Value
// Primitive Data Types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = object
// typeof

// when assigning a primitive data types value to a variable
// any changes are made directly to that value, 
// without affecting its original value

// when assigning non-primitive data type values to a variable
// it is done by reference so any changes will affect all references 

let number = 1
let number2 = number
number2 = 7
console.log(`the first value is ${number}`);
console.log(`the secont value is ${number2}`);

let person1 = {name: 'bob'}
let person2 = person1
person2.name = 'susy' // this will change person1 and person2
console.log(`the name of the first person is ${person1.name}`);
console.log(`the name of the second person is ${person2.name}`);


// null vs undefined - both represent 'no value' 
// undefined - javascripts way of saying it can't find value
// -variable without value
// -missing function arguments
// -missing object properties
// null - 'developer sets this value'

let number3 = 20 + null 
console.log(number3); // 20
let number4 = 20 + undefined
console.log(number4); // NaN

// Truthy and Falsy 
// "", '', 0, -0, NaN, false, null, undefined

const bool1 = true
const bool2 = 2 > 1

if(true){
  console.log("this is true");
}
if(bool2){
  console.log('this is true too');
}
const text = "" // empty string evaluates to falsy 
const text2 = 'Austin'
if(text2){
  console.log('the value is truthy');
} else {
  console.log('the value is falsy');
}

// Ternary Operator 

// unary operator = typeof
let text3 = "some text"
console.log(typeof text3);

// binary operator - assignment
let numberA = 3
let numberB = 2 + 5

// ternary operator 
// condition ? (runs if true) : (runs if false)

const value = 2 > 1

value ? console.log('value is true') : console.log('value is false')

