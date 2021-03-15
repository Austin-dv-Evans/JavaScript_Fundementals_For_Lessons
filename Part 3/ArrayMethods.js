// Part 3 Final Lesson

// Powerful Array Methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required

// Accept CALLBACK function as an argument, 
// calls Callback against each item in an array. 
// Reference Item in the Callback Parameter

const numbers = [0, 1, 2, 3, 4]

// show all the numbers with loop
for (let i = 0; i < numbers.length; i++){
  console.log(numbers[i])
}
numbers.forEach((num) => console.log(num + 5))

// forEach
// does not return new array
// iterates over array
const people = [
  {firstname:'Austin', age: 29, position: 'developer', id: 1},
  {firstname:'Renee', age: 30, position: 'agent', id: 2},
  {firstname:'Jerry', age: 6, position: 'dog', id: 3},
  {firstname:'Luna', age: 1, position: 'baby', id: 4},
]

const showPerson = person => {console.log(person.position.toUpperCase())}

people.forEach(showPerson)

people.forEach((person) => console.log(person.age))


// MAP!!
// you will use this one all the time! 
// does return a new array
// does not change the size of original array
// uses values from original array when making new one

const ages = people.map((person) => {
  return person.age + 1
})
const newPeople = people.map((person) => {
  return {firstname: person.firstname.toUpperCase(), oldAge: person.age + 50, position: 'retired' }
})
console.log(newPeople);
console.log(ages)

const names = people.map((person) => {
  return `<h1>${person.firstname}</h1>`
})
console.log(names)
document.body.innerHTML = names.join('')


// FILTER 
// does return a new array
// can manipulate the size of new array
// returns based on condition

const youngPeople = people.filter((person) => {
  return person.age <= 25
})
console.log(youngPeople);

const developers = people.filter((person) => {
  return person.position === 'developer'
})
console.log(developers);


// FIND 
// returns single instance, in this case an  object
// returns FIRST MATCH, if no match returns undefined
// great for getting a unique value

const singlePerson = people.find((person) => {
  return person.id === 3
})
console.log(singlePerson);

console.log(people.find((person) => {
  return person.firstname === 'Luna'
}));
// remember filter retuns array
console.log(people.filter((person) => {
  return person.firstname === 'Luna'
}));

// REDUCE!!
// iterates over array
// uses callback function
// reduces to one single value ie number or array or object
// first param ('acc') - total of all calculations
// second param ('curr') - current iteration/ value
// third param ('idx') - current index
// fourth param ('src') - source array

const peopleWithSalary = [
  { firstname: "Austin", age: 29, position: "developer", id: 1, salary: 2000 },
  { firstname: "Renee", age: 30, position: "agent", id: 2, salary: 3000 },
  { firstname: "Jerry", age: 6, position: "dog", id: 3, salary: 1000 },
  { firstname: "Luna", age: 1, position: "baby", id: 4, salary: 1000 },
]

const total = peopleWithSalary.reduce((acc, curr) => {
  console.log(`total: ${acc}`)
  console.log(`current item: ${curr.salary}`);
  acc += curr.salary
  // always want to return the accumelator!!
  return acc
}, 555)
// 555 is the initial value