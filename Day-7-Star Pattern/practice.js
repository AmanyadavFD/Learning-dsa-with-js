/*
 *****
 *****
 *****
 *****
 *****
 */
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5; j++) {
    row = row + "*";
  }
  console.log(row);
}
console.log("---------------------------------------------------");
/*
 *
 **
 ***
 ****
 *****
 */

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }
  console.log(row);
}
console.log("---------------------------------------------------");
/*{
 1
 123
 1234
 12345
}*/

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
console.log("---------------------------------------------------");
/*{
 1
 22
 333
 4444
 55555
}*/

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}
console.log("---------------------------------------------------");
/*{
 12345
 1234
 123
 12
 1
}*/

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
console.log("---------------------------------------------------");

/*{
*****
****
***
**
*
}*/

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row = row + "*";
  }
  console.log(row);
}
console.log("---------------------------------------------------");
/*{
    *
   **
  ***
 ****
*****
}*/

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - (i + 1); j++) {
    row = row + " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

console.log("---------------------------------------------------");
/*{
1
10
101
1010
10101
101010
}*/

let toggle = 1;
for (let i = 0; i < 6; i++) {
  let row;
  row = "";

  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}

console.log("---------------------------------------------------");
// 1
// 01
// 010
// 1010
// 10101
// 010101
