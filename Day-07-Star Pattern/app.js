// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// for (let i = 0; i < 2; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }
// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j <= 4; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

/*{
 1
 123
 1234
 12345
}*/

// option-1
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }

// option-2

// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }

/*{
 1
 22
 333
 4444
 55555
}*/

// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + (i + 1);
//   }
//   console.log(row);
// }

/*{
 12345
 1234
 123
 12
 1
}*/

// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < 5 - i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }

/*{
*****
****
***
**
*
}*/

// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < 5 - i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

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
