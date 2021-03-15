// Part 5 Lesson 3

// Navigate the Dom Tree

// childNodes - returns all childNodes including whitespace
// which is treated as a text node

// children -- better because it returns nodes not whitespace
// firstChild
// lastChild

const result = document.querySelector('#result')

const allChildren = result.children
console.log(allChildren);

console.log(result.firstChild);
console.log(result.lastChild);

// Parent Element

const heading = document.querySelector('h2')
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement);
// can keep on chaining untill we run out and get null

const parent = heading.parentElement.parentElement
parent.style.color = 'red'

// Sibling Elements

// previousSibling
// nextSibling
// return whitespace

const first = document.querySelector('.first')
console.log(first);
const second = first.nextSibling
console.log(second); // returns #text aka whitespace
const secondNotWhiteSpace = first.nextSibling.nextSibling
console.log(secondNotWhiteSpace);

const last = document.querySelector('.last')
console.log(last);
const third = last.previousSibling.previousSibling
console.log(third);


// nextElementSibling!

// next element sibling - the best
// previous element sibling - the best
const noWhiteSpaceBest = first.nextElementSibling
noWhiteSpaceBest.style.color = 'green'


// Text Content and NodeValue

const item = document.getElementById('specialItem')
const value = item.nodeValue
console.log(value) // => null
console.log(item.childNodes); // include whitespace
console.log(item.firstChild.nodeValue); // list item 3

const easyValue = item.textContent
console.log(easyValue); // list item 3


// getAttribute()
// setAttribute()

// elements have attributes we can get and set

const first2 = document.querySelector('.firstNew')
const firstClass = first2.getAttribute('class') // pass in attribute type
console.log(firstClass);

const link = document.getElementById('link')
const showLink = link.getAttribute('href')
console.log(showLink);

const lastItem = link.nextElementSibling
console.log(lastItem);
lastItem.setAttribute('class', 'firstNew')
lastItem.textContent = 'i also have a class of firstNew now'

const links = document.querySelectorAll('.first')
console.log(links);