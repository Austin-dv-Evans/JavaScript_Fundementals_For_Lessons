// Part 5 Lesson 5

// innerHTML
// textContent

const list = document.getElementById('firstUl')
const div = document.getElementById('second')
const item = document.querySelector('.item1')
console.log(div.textContent);
console.log(list.innerHTML); // returns whole html structure within element
console.log(list.textContent);

const ul = document.createElement('ul')
ul.innerHTML = `<li class="item1">item numero uno</li> <li>wassup innerhtml</li>`
document.body.appendChild(ul)

div.textContent = 'Hello world'
div.innerHTML = 'Hello people'

// CSS property

const random = document.querySelector('.random')
console.log(random.style);
// random.style.backgroundColor = 'blue'
// random.style.color = 'white'
// random.style.fontSize = '2rem'
// random.style.textTransform = 'capitalize'
random.classList.add('title')