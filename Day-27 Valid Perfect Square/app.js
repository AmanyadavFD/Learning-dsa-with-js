/*{

Valid Perfect Square

Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. 
In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

}*/

function isPerfectSquare(x) {
  if (x < 2) return true;

  let l = 2;
  let r = Math.floor(x / 2);

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (x === mid ** 2) {
      return true;
    } else if (x > mid ** 2) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
}

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
