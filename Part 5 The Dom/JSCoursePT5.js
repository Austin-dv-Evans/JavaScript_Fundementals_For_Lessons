// Part 5 The DOM Intro lesson 1

// Select Elements
// Traverse DOM
// Insert / Remove Elements
// Listen for Events
// Apply Styling
// Add / Remove Css Classes
// ... and lots more! This is where Javascript gets exciting!

// The Document Object Model

// When we write our HTML, and view it in the browser
// browser turns into a Document Object Model
// in the DOM each element becomes an object / node
// we can use Javascripts built in methods to interact with these nodes 

// Elements tab in your console is the DOM 

// Select and element and then select how you want to manipulate that element

// Many different ways!

// Select element and assign it to a variable
// Then you have access to the "node object"
// or a "node list" arraylike object

// The Window Object = browser api
// The "document"
// console.dir - all the methods and properties on an object

console.log(document); // this is the document structure
console.log(window); // this is the window object

// window.alert('hello')
// alert('hello again')

// javascript looks to see if the method we are calling is 
// one attached to the widow object. so we can omit the word window.

console.dir(document) 
// tells us all the properties as well as methods attached to that object

