function twoSum(arr, target) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    const needed = target - number;
    if (obj.hasOwnProperty(needed)) {
      return [obj[needed], i];
    } else {
      obj[number] = i;
    }
  }
}

console.log(q2([100, 3, 1, 6, 4, 12, 0, 13], 13));
