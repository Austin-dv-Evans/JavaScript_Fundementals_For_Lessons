// Part 5 Lesson 4

// ClassList and ClassName

const first = document.getElementById('firstHeading')
const second = document.getElementById('secondHeading')
const third = document.getElementById('thirdHeading')

const classValue = first.className
console.log(classValue);

// when you use className you can only have one class
// otherwise you will over ride your values
second.className = 'text'
second.className = 'colors'

// you can put in two class names
second.className = 'text colors'

// but better way is to use classList 
// that way we can assign mulitple classes off and on
// independently of each other

// mulitple classNames seperated by comma in classList
// but it wont override!
// third.classList.add('text')
third.classList.add('text', 'colors')
// third.classList.add('colors')
console.log(third.classList);

third.classList.remove('colors')

let results = third.classList.contains('text') // true or false
console.log(results);


// Dynamically add elements with 

// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

const result = document.querySelector('.resultPt5')

// create empty element
const bodyDiv = document.createElement('div')
// create text node
const text = document.createTextNode('a simple body div dynamically')
bodyDiv.appendChild(text)
document.body.appendChild(bodyDiv)

const heading = document.createElement('h2')
const headingText = document.createTextNode('dynamic heading')
heading.appendChild(headingText)
heading.classList.add('blue')
result.appendChild(heading)


// Replace Child

const smallHeading = document.createElement('h4')
const smallText = document.createTextNode(`i am small heading text appended`)

smallHeading.classList.add('red')
smallHeading.appendChild(smallText)
document.body.replaceChild(smallHeading, bodyDiv)

// prepend - method
// and innerText - property

const heading3 = document.createElement('h2')
heading3.innerText =  'this is my prepended heading three'

document.body.prepend(heading3)

// remove and removeChild

const result4 = document.querySelector('.resultNew')
console.log(result4);
// result4.remove()

const heading5 = result4.querySelector('h1')
result4.removeChild(heading5)
// this shows how we can run querySelector on 
// the result of another querySelector