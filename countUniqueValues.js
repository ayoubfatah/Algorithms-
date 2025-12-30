function countUniqueValues(arr) {
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 10]));
// console.log(countUniqueValues([1, 1, 1, 2, 2, 3]));

function descendingOrder(n) {
  return +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
console.log(descendingOrder(1021));
