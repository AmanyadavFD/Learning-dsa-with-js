function recursiveSum(n) {
  if (n == 0) return 0;
  return n + recursiveSum(n - 1);
}
// console.log(recursiveSum(5));

// Sum of odd numbers in array using Recursion

/*{
Input: [5, 2, 6, 1, 3]
Odd numbers: 5, 1, 3
Output: 9
}*/

const arr = [5, 2, 6, 1, 3];
function sumOfOddNumbers(num) {
  let isOdd = arr[num] % 2 != 0;
  if (num == 0) {
    if (isOdd) {
      return arr[0];
    } else {
      return 0;
    }
  }

  if (isOdd) {
    return arr[num] + sumOfOddNumbers(num - 1);
  } else {
    return 0 + sumOfOddNumbers(num - 1);
  }
}

const output = sumOfOddNumbers(arr.length - 1);

console.log(output);
