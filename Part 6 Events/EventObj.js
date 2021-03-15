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

