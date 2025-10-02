// function print(n) {
//   if (n < 1) return;
//   console.log(n);
//   print(--n);
// }

// print(5);

// let n = 5;
// function oneToN(x) {
//   if (x > n) return;
//   console.log(x);
//   oneToN(++x);
// }
// oneToN(1);

// function printDescending(n) {
//   if (n === 0) return;
//   console.log(n);
//   printDescending(n - 1);
// }

// printDescending(5);

let num = 5;

function printAescending(x) {
  if (x > num) return;
  console.log(x);
  printAescending(x + 1);
}
printAescending(1);
