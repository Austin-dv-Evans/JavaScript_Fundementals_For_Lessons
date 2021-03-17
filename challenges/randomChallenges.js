// this section is a work in progress and will soon have multiple
// challenges and algorithms to accompany different lessons
// for now these are random algorithms 

// rewrite as a switch statement
function getGrade(score) {
  let grade
  if (score > 25 && score <= 30) {
    grade = "A"
    console.log(grade)
  } else if (score > 20 && score <= 25) {
    grade = "B"
    console.log(grade)
  } else if (score > 15 && score <= 20) {
    grade = "C"
    console.log(grade)
  } else if (score > 10 && score <= 15) {
    grade = "D"
    console.log(grade)
  } else if (score > 5 && score <= 10) {
    grade = "E"
    console.log(grade)
  } else if (score >= 0 && score <= 5) {
    grade = "F"
    console.log(grade)
  }
}


// write a function that takes in two parameters
// length and width and returns the perimeter and the area
function Rectangle(a, b) {
  let perimeter = 2 * (a + b)
  let area = a * b
  return [perimeter, area]
}
Rectangle(4,5)


// determine if any two values in an array multiplied together
// are higher than the sum of the array * 2
function ArrayChallenge(arr) {
  let total = 0
  for (val of arr) {
    total += val
  }

  dblTotal = total * 2
  let multipliedElementArr = []

  for (let i = 0; i < arr.length - 1; i++) {
    let multipliedElement = arr[i] * arr[i + 1]
    multipliedElementArr.push(multipliedElement)
  }

  let newHighValue = null
  multipliedElementArr.forEach((element) => {
    if (element > dblTotal) {
      newHighValue = element
    }
  })

  return newHighValue ? "true" : "false"
}

ArrayChallenge([2,20,10,2,3,4,1])