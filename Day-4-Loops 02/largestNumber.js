// write a function that returns the largest number in an array.

const largestNumber = (arr) => {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

let arr = [5, 0, 7, 10, 8, 17, 1];
const output = largestNumber(arr);

console.log(output);
