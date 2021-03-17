// Part 6 lesson 1

// there are tons of events
// we will continue using simple examples

// the first event onCLick

// select the element
// addEventListener()
// what event, what do we want to do

const btn = document.querySelector('.btn3')
console.log(btn);

const heading = document.querySelector('h3')
console.log(heading);
// btn.addEventListener('click', function(){
//   heading.classList.add('blue')
// })

const changeColors = () => {
  let hasClass = heading.classList.contains('red')
  if(hasClass){
    heading.classList.remove('red')
  }
  else{
    heading.classList.add('red')
  }
}
btn.addEventListener('click', changeColors)


// different mouse events

// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading2 = document.querySelector('h3')
const btn2 = document.querySelector('.btn4')
// first
btn2.addEventListener('mousedown', () => {
  console.log("down");
})
// next
btn2.addEventListener('mouseup', () => {
  console.log("up");
})
// last
btn2.addEventListener('click', () => {
  console.log("you clicked me");
})

heading2.addEventListener('mouseenter', () => {
  heading2.classList.add('blue')
})
heading2.addEventListener('mouseleave', () => {
  heading2.classList.remove('blue')
})


// Key Events
// keypress - when key is pressed
// keydown - when key is down
// keyup - whern key is released 

const nameInput = document.getElementById('name')

// nameInput.addEventListener('keypress', () => {
//   console.log('you pressed a key');
// })
// nameInput.addEventListener('keydown', () => {
//   console.log('you pressed down a key');
// })
nameInput.addEventListener('keyup', () => {
  console.log(nameInput.value);
})