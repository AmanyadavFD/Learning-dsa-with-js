function reverseNum(num) {
  let original = num;
  let rev = 0;
  num = Math.abs(num);
  while (num > 0) {
    let lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  let limit = Math.pow(2, 32);
  if (rev > limit || rev < -limit) {
    return 0;
  }
  return original > 0 ? rev : -rev;
}

const reverseNumOutput = reverseNum(12345);
console.log(reverseNumOutput);
