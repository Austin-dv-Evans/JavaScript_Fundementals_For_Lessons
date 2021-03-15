// Part 4 lesson 2

// The Date Object

const months = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"]

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', "Thursday", "Friday", "Saturday"]


const date = new Date()
console.log(date);
console.log(date.getMonth()); // 2 ? why 2 it is currently March!
// march is 2 because javascript pulls the month from an array, 0 index based!
console.log(months[date.getMonth()]) // March

console.log(date.getDay()) // 3
console.log(days[date.getDay()]) // => Wednesday
// day starts at 0 index as well but starts with sunday

console.log(date.getDate())
console.log(date.getFullYear())

const day = date.getDay()
const month = date.getMonth()

const sentence = `${days[day]}, ${months[month]} ${date.getDate()}, ${date.getFullYear()}.` 
console.log(sentence);
document.write(sentence)

// set the date to whenever you want like this
const preSetDate = new Date('7/05/1991')
console.log(preSetDate.getFullYear())
