// string properties and methods
let text = "Peter Johnson"
let result3 = text.replace("Peter", "Austin")
// replace takes two params the text you change and the text you change it to
console.log(result3)

let stringMethod2 = text.split(" ")
// split splits a string into and array of word with a sigle space " " or characters with no space ""
console.log(stringMethod2)

let stringMethod3 = text.indexOf("J") // returns 6
// indexOf returns index of a substring, param one is the substr, and param two is where you want to start
// counts whitespace
// no param 2 means you start from the begining
console.log(stringMethod3)
// others include .length .toLowerCase .match .concat() .trim
// tons of string methods look them up!

// you can chain methods together
console.log(text.trim().toLowerCase().startsWith("peter"))
