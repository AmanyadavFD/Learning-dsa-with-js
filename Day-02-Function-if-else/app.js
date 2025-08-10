function greet(name) {
  console.log(`Hello ,${name}`);
}

greet("Jhon");
greet("David");
greet("Eliy");

// create the function will be add two values

function sum(num1, num2) {
  return num1 + num2;
}
const outputSum = sum(20, 29);
console.log(`The Sum of the Two Number:${outputSum}`);

// Create the function will be multiplay of two number

function multiplyOfTwoNum(num1, num2) {
  return num1 * num2;
}
const outputMultiplay = multiplyOfTwoNum(10, 2);

console.log(outputMultiplay);

// Function for the Square of the number .

function squareOFNum(num) {
  let square = num * num;
  return square;
}

const outputOfSquare = squareOFNum(5);
console.log(outputOfSquare);

// Create a function that accepts an age and determines whether
// the person is eligible to vote

function eligibleForVote(age) {
  if (age >= 18) {
    return "You are the eligible for the vote.";
  } else {
    return "You are not eligible for the vote.";
  }
}

const outputForVoting = eligibleForVote(17);
console.log(outputForVoting);

// Create a function to check number is even or odd

function isEvenOdd(num) {
  let rem = num % 2;

  if (rem === 0) {
    console.log(`Number is Even`);
  } else {
    console.log(`Number is Odd`);
  }
}
isEvenOdd(12);
