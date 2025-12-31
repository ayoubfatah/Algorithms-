function containsDuplicates(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    map[number] = (map[number] || 0) + 1;
    if (map[number] > 1) {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicates([1, 2, 3, 4, 5, 6]));
