/*{
Given a binary array nums, return the maximum number of consecutive 1’s in the array.

Examples
Example 1:
Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last three digits are consecutive 1s. 
The maximum number of consecutive 1s is 3.
    
Example 2:
Input: nums = [1,0,1,1,0,1]
    Output: 2
    
Constraints:
1 ≤ nums.length ≤ 105
nums[i] is either 0 or 1.
Optimal Approach – Single Pass
Initialize two variables:

currentCount → to count current streak of 1s
maxCount → to keep track of the maximum streak seen so far
Traverse the array:

If nums[i] == 1, increment currentCount
If nums[i] == 0, compare currentCount with maxCount, update maxCount, then reset currentCount to 0
}*/

function findMaxConsecutiveOnes(arr) {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }
  return Math.max(currentCount, maxCount);
}

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
