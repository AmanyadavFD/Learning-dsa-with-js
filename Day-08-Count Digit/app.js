//  Write a function that returns the count of digits in number

/*
🧾 Problem: Count the Digits
Story:
Ravi is trying to analyze numbers in his math notebook. While going through a long list of numbers, he realized he needs a quick way to find how many digits are in a given number.
He’s too tired to count them manually — so he turns to you for help.
Can you write a function that takes an integer and returns how many digits it contains?
*/

let num = 6801234;
console.log(Math.floor(num / 10));

const countDigits = (num) => {
  if (num === 0) return 1;

  let count = 0;
  while (Math.abs(num) > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};

const outputOfCount = countDigits(num);

console.log(outputOfCount);
