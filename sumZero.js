function sumZero(arr) {
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted, "sorted");
  let left = 0;
  let right = sorted.length - 1;
  while (left < right) {
    const sum = sorted[left] + sorted[right];
    if (sum === 0) {
      return [sorted[left], sorted[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([1, 2, 3, 5, 4, 6, 8, 5, -4, -1, -19, -23, 10, -5]));
