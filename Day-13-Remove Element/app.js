/*{

27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.

Return k.

Input: nums = [3,2,2,3], val = 3  
Output: 2, nums = [2,2,_,_]  
Explanation: Your function should return k = 2, with the first two elements of nums being 2.  
It does not matter what you leave beyond the returned k (hence they are underscores).  


Input: nums = [0,1,2,2,3,0,4,2], val = 2  
Output: 5, nums = [0,1,4,0,3,_,_,_]  
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 1, 4, 0, and 3.  
Note that the five elements can be returned in any order.  
It does not matter what you leave beyond the returned k (hence they are underscores).  

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

Alright, here’s your **story-based version** of the *Remove Element* problem:

---

**Story Version — The Fruit Basket Problem** 🍎🍊🍇

You are helping your friend run a fruit stall. They have a long basket (`nums`) filled with fruits, where each type of fruit is represented by a number. For example:

* `0` = Apple 🍎
* `1` = Orange 🍊
* `2` = Banana 🍌
* `3` = Mango 🥭
* `4` = Grapes 🍇

One day, a customer comes in and says they don’t want **any** of a certain fruit (let’s call it `val`). They ask you to **remove all fruits of that type from the basket**, but you must do it **without buying a new basket** — you can only rearrange or overwrite fruits **in-place**.

Your goal is to:

1. Move all the unwanted fruits (`val`) out of the way, so that the first `k` fruits in the basket are the ones the customer can have.
2. Return the number `k`, which tells how many fruits are left after removing the unwanted ones.
3. The order of the remaining fruits **does not matter** — the customer just cares about getting the right fruits.
4. The rest of the basket (after the first `k` fruits) can have anything in it — it doesn’t matter.

---

**Example 1:**
Basket = `[3,2,2,3]`, Fruit to remove = `3` (Mango 🥭)

* After removal: `[2,2,_,_]`
* `k = 2` (Only bananas left 🍌🍌)

---

**Example 2:**
Basket = `[0,1,2,2,3,0,4,2]`, Fruit to remove = `2` (Banana 🍌)

* After removal: `[0,1,4,0,3,_,_,_]`
* `k = 5` (Apples, oranges, grapes, apples, mangoes remain)

---

**Constraints:**

* `0 <= nums.length <= 100`
* `0 <= nums[i] <= 50`
* `0 <= val <= 100`

---

If you want, I can now also **write the JavaScript solution** for this in a clean way and include time & space complexity analysis so it fits your DSA Day notes.

}*/

function removeElements(num, val) {
  let x = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] != val) {
      num[x] = num[i];
      x = x + 1;
    }
  }
  return x;
}

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

const output = removeElements([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(output);
