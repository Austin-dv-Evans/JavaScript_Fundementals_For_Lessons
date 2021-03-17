// Part 6 lesson 2

// event object argument e, evt
// event object is gigantic
// info about triggered events
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behavior

const heading = document.getElementById('headingEventObj')
const btn = document.querySelector('.btn5')
const link = document.getElementById('link5')
console.log(btn);
console.log(heading);


// heading.addEventListener('click', () => {
//   heading.classList.add('blue')
// })

heading.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  console.log(this);
})
btn.addEventListener('click', (e) => {
  e.currentTarget.classList.add('blue')
  console.log(e.type);
})
const someFunction = (e) => {
  // prevented the default action of refreshing the page
  e.preventDefault()
}
link.addEventListener('click', someFunction )

// this keyword
// take it easy on the this keyword
// it is one of the most confusing concepts in javascript
console.log(this);


// differences between target and currentTarget
// currentTarget - always refers to the element to which
// the event handler has been attached to
// target - identifies the element on which the event occured

const eventBtns = document.querySelectorAll('.btn6')
eventBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.currentTarget);
    // e.currentTarget.style.color = 'green'
    console.log('target:', e.target);
    e.target.style.color = 'green'
  })
})

// with target we can click on the nested tags within a button
// because target refers to the element on which the event occured
// not the element we attached the event handler to.


// Event Propogation, Event Bubbling, Event Caturing

// Event Propogation - order the elements are fired
// Event Bubbling - cliked element first then bubbles up -- default
// Event Capturing - fires at the root and fires unitl it reaches target

// we can select elements without targeting them specificlly
// allows us to select elements dynamically 

const container = document.querySelector('.container')
const list = document.querySelector('.list-items')

const showBubbling = (e) => {
  // console.log('current target: ', e.currentTarget);
  // console.log('target: ', e.target);
  if(e.target.classList.contains('link6')){
    console.log('you clicked on link');
  }
}

const stopPropagation = (e) => {
  e.stopPropagation()
}

container.addEventListener("click", showBubbling, { capture: true })
// container.addEventListener('click', showBubbling)
document.addEventListener("click", showBubbling, { capture: true })
// document.addEventListener('click', showBubbling)
window.addEventListener("click", showBubbling, { capture: true })
// window.addEventListener('click', showBubbling)
list.addEventListener('click', showBubbling, {capture: true})
// list.addEventListener('click', showBubbling)
// list.addEventListener('click', stopPropagation)

// adding capture: true makes event fire in reverse order
// instead of from the element(list) to the window
// it starts with the root and ends at the list

// Event Propogation Example

const containerNew = document.querySelector('.container2')
const btnNew= document.querySelector('.btn7')
// const headingNew = document.querySelector('.headingEvp')

const sayHello = () => {
  console.log("hello there");
}

btnNew.addEventListener('click', () => {
  const element = document.createElement('h1')
  element.classList.add('.headingEvp')
  element.textContent = 'I am in container and I am added dynamically'
  containerNew.appendChild(element)
})

// headingNew.addEventListener('click', sayHello)

containerNew.addEventListener('click', (e) => {
  if(e.target.classList.contains('.headingEvp')){
    console.log('Hello There');
  }
})

// this shows how if we add an element dynamically 
// we cant assign or grab the element that doesn't exist yet
// so we can grab the container it is in and say
// if you have this class name, then do this