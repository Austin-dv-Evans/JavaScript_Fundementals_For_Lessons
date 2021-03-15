// Part 3 lesson 2

// Global Scope vs Local Scope

// Global Scope

// any variable outside a code block aka {} is Global Scope
// can be accessed anywhere in the program
// Gotchas can be name collisions and modifing by mistake

let firstName = 'Bobo'
firstName = 'Peter'

// const firstName = 'John' 
// this will lead to error "identifier has already been declared"

const calculate = () => {
  console.log(firstName);
  firstName = 'orange'
  const inner = () => {
    firstName = 'innerFunc'
    console.log(`this is modifiing a global variable in a nested function ${firstName}`);
  }
  inner()
}
calculate()

if(true) {
  console.log(firstName)
  firstName = 'pants'
}
console.log(`Hello my name is ${firstName} and I am awesome`);


// Local Scope

let firstName2 = 'Bozo'

const calculate2 = () => {
  const firstName2 = "John"
  noKeywordGlobal = "Whoa we are accessing this because we left out the keyword"
}
// console.log(firstName20); // leads to 'Uncaught reference error'

// is undefinded unless we invoke funciton
calculate2()
console.log(noKeywordGlobal);
if(true){
  const firstName2 = 'Austin'
}

console.log(`my name is ${firstName2} and I'm awesome`)

{
  const localScope = "cant acess outside"
}
// console.log(localScope); // not defined