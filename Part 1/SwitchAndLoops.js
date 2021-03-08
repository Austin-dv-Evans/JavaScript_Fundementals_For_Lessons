// switch statements
// dice values

const dice = 1

switch (dice) {
  case 1:
    console.log("you got one!")
    break
  case 2:
    console.log("you got two!")
    break
  case 3:
    console.log("you got three!")
    break
  case 4:
    console.log("you got four!")
    break
  case 5:
    console.log("you got five!")
    break
  case 6:
    console.log("you got six!")
    break
  default:
    break
}

// Lets get loopy
// types of loops while loop, do while loop, for loop

let amount = 10
while (amount > 0) {
  console.log(`I have ${amount} dollars and I am going shopping`)
  amount--
}

let money = 0

do {
  console.log("Work for money.")
  money += 100
} while (money < 500)
// do while loops are for when you want to run the code block at least once

let i
for (i = 0; i < 10; i++) {
  console.log("and the number is : " + i)
}
