const arr = [1, 22, 10, 14, 13, 2, 13];

function callSum(arr, num) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] + arr[i] === num) return `the indexes are ${[arr[j], arr[i]]}`;
    }
  }
  return [];
}

console.log(callSum(arr, 15));
