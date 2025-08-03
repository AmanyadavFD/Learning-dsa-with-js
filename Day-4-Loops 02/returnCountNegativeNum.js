// Write a function that returns the number of negaive number in an array.

const countNegative = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
};

let arr = [2, -9, 17, 8, 1, -18, -4, 8];

const result = countNegative(arr);
console.log(result);
