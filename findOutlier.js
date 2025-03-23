// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  const oddNumbers = [];
  const evenNumbers = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenNumbers.push(integers[i]);
    } else {
      oddNumbers.push(integers[i]);
    }
  }

  if (oddNumbers.length === 1) {
    return oddNumbers[0];
  } else if (evenNumbers.length === 1) {
    return evenNumbers[0];
  } else return integers;
}
console.log(findOutlier([2, 2, 4, 44, 1, 6]));
console.log(findOutlier([1, 3, 4, 16, 14, 12]));
