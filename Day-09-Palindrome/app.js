/*{
last digit =  num % 10;
remove last digit =  n / 10
}*/
function checkPalindrome(num) {
  let original = num;
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  if (rev === original) {
    return true;
  } else {
    return false;
  }
}

const palindrome = checkPalindrome(121);
console.log(palindrome);
