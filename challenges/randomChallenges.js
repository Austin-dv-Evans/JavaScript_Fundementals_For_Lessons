function getGrade(score) {
  let grade
  // Write your code here
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
let strin = 'acbbbbd'
console.log(strin[0])

function Rectangle(a, b) {
  let perimeter = 2 * (a + b)
  let area = a * b
  console.log(a)
  console.log(b)
  console.log(perimeter)
  console.log(area)
}
Rectangle(4,5)

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

  return console.log(newHighValue ? "true" : "false")
}

ArrayChallenge([2,20,10,2,3,4,1])