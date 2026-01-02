function isPalindrome(s) {
  const result = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = result.length - 1;

  while (left < right) {
    if (result[right] !== result[left]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));
