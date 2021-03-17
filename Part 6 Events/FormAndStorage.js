// Part 6 Final Lessons

// Form Submit 
// Local Storage

// submit event listener
// prevent default
// how to retrieve value from local storage


// submit event listener

const form = document.getElementById('form')
const inputName = document.getElementById('inputName')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
  // the default action is to refresh the page after submit
  e.preventDefault()
  console.log(inputName.value);
  console.log(password.value);
})


// Web Storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'Austin')
// sessionStroage.setItem('name', 'Austin')

// in dev tools go to Application Tab
// you will find Storage both local and Session

localStorage.setItem('name', 'Austin')
sessionStorage.setItem('name', 'Austin')

// local keeps data between opening and closing of browser
// session keeps data as long as tab is open

// two params key and value
localStorage.setItem('name', 'john')
// vvv this will overwrite
// only one key value pair will be found in storage
localStorage.setItem('name', 'Austin')

// keys added this way must be unique to prevent being overwritten
localStorage.setItem('friend', 'Garrison')

// getItem gets one param the unique key
const friend =  localStorage.getItem('friend')
console.log(friend); // => Garrison

// removeItem one param the unique key
localStorage.removeItem('name')

// clears everything from local storage
// localStorage.clear()


// Local Storage with Multiple Values
// JSON.stringify()
// JSON.parse()

const friendsList = ['Nick', 'Garrison', 'Austin']

// vvv NO!
localStorage.setItem('friends', friendsList) 
const values = localStorage.getItem('friends')
console.log(values[0]); // => N
// when we do it this way our array turns into one big string
// that is why values[0] is the first letter and not first item

localStorage.setItem('friendsList', JSON.stringify(friendsList))
// now we are storing as an array
const values2 = JSON.parse(localStorage.getItem('friendsList'))
console.log(values2[0]); // => Nick

let fruits

if(localStorage.getItem('fruits')){
  fruits = JSON.parse(localStorage.getItem('fruits'))
}else{
  fruits = []
}

console.log(fruits);

// fruits.push('apple')
fruits.push('orange')
localStorage.setItem('fruits', JSON.stringify(fruits))
console.log(fruits); // each refresh we are adding another orange