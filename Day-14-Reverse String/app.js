/*{
Here’s the **Reverse String** question in the format from your screenshot:

---

### 344. Reverse String

**Easy**

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array **in-place** with **O(1)** extra memory.

---

#### Example 1:

**Input:**
`s = ["h","e","l","l","o"]`
**Output:**
`["o","l","l","e","h"]`

#### Example 2:

**Input:**
`s = ["H","a","n","n","a","h"]`
**Output:**
`["h","a","n","n","a","H"]`

---

#### Constraints:

* `1 <= s.length <= 10⁵`
* `s[i]` is a printable ASCII character.

---


Problem: Satellite Signal Decoder
At Google’s Deep Space Research Lab, a new satellite named Echo-9 is transmitting encrypted messages back to Earth.
However, due to a programming bug, every message is reversed before transmission.
Your task is to reverse it back to its original form so the engineers can read it.

The challenge?

You must reverse the sequence in-place because the satellite’s memory is extremely limited.

You cannot use extra storage proportional to the message length.

Input
The first line contains an integer n — the number of characters in the message.

The second line contains n space-separated characters representing the encrypted message.


Problem: The Magical Mirror
In the Kingdom of Palindoria, there is a magical mirror that can reverse any sequence of letters placed before it.
One day, the royal librarian brought a list of letters written in order, but accidentally dropped them.
The king demands that the letters be placed in reverse order exactly as the mirror would show them — but the court magician insists on doing it without using any extra parchment (meaning you must do it in-place).

Your task is to help the librarian reverse the order of letters in the list.

Input
The first line contains an integer n — the number of letters.

The second line contains n space-separated characters, representing the letters.

Output
Print the reversed list of letters in a single line, space-separated.

Constraints
1 ≤ n ≤ 10⁵

Each letter is a printable ASCII character.

}*/

function reversesString(arr) {
  let half = Math.floor(arr.length / 2);
  for (let i = 0; i < half; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  return arr;
}

// #### Example 1:

// **Input:**
// `s = ["h","e","l","l","o"]`
// **Output:**
// `["o","l","l","e","h"]`

const array = ["h", "e", "l", "l", "o"];

console.log(reversesString(array));
