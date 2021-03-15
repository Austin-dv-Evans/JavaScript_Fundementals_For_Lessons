// Part 5 lesson 2 Get Element


// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementById('element')

// assigning to variable
const heading = document.getElementById('title') 
console.log(heading);
// give us access to node object
heading.style.color= 'red'

// direct assignment 
document.getElementById('btn').style.backgroundColor = "blue"
document.getElementById('btn').style.color = "orange"

// a bit easier to use variables 
const button = document.getElementById('btn2')
button.style.backgroundColor = 'orange'
button.style.color = 'blue'


// getElementByTagName('tagname')

const allButtons = document.getElementsByTagName('button')
console.log(allButtons); 
// returns a HTML Collection in an "ARRAY LIKE OBJECT"
console.log(allButtons.length);
// so we can select the first button like so
allButtons[0].style.backgroundColor = 'green'

// works with array properties but NOT METHODS

const items = document.getElementsByTagName('li')

// items.forEach((item) => {
//   console.log(item);
// })

// ^^^ this does not work because it is an array like object
// not an array. error forEach is not a function

const betterItems = [...items]

betterItems.forEach((item) =>{
  console.log(item);
})
// ^^^ this works because we use the spread operator to create item

console.log(items); // HTML Collection
console.log(betterItems); // array of elements


// getElemntsByClassName('classname')
// select the element or group of elements that we want

// node-list = arry-like object again
// index, length work, array methods do not 

const listItems = document.getElementsByClassName('special')

console.log(listItems);
listItems[2].style.color = 'blue'



// Query Selector

// select the element or group of elements that we want
// decide the effect we want to apply to the selection

// querySelector('any css'); - slects single
// querySelectorAll('any css') - selects all 

const result = document.querySelector('#result')
result.style.backgroundColor = 'orange'

// using query selector we just get the first item 
// even if we are targeting a class

const item = document.querySelector('.special')
console.log(item);

// you can pass any css in as parameters even psedo selectors
const lastItem = document.querySelector('li:last-child')
console.log(lastItem);

const list = document.querySelectorAll('.special')
console.log(list)

// we can use forEach right away with query selecor all
// it returns a node list which is very much like an array 
// so we dont have to transform it into an arry like with 
// get element by whatever

list.forEach((item) => {
  console.log(item);
  item.style.color = 'red'
})

