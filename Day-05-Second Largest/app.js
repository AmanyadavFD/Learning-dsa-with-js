// Find the Second Largest Element in the array.

const secondLargest = (arr) => {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

// const arr = [4, 9, 0, 2, 8, 7, 1];
// const arr = [2];
// const arr = [-2, -18, -5, -34];
const arr = [10, 20, 8, 9, 3, 5, 20];

const result = secondLargest(arr);

console.log(result);
