const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [1, 2, 3, 22, 11, 22, 33, 44];

// using for loop
function arrayIntersectionWithForLoop(array1, array2) {
  const arr3 = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) arr3.push(array1[i]);
    }
  }
  return arr3;
}

console.log(arrayIntersectionWithForLoop(arr1, arr2), "forLoop");

// using filter

function arrayIntersectionWithFilter(array1, array2) {
  const result = array1.filter((number) => array2.includes(number));
  return result;
}

console.log(arrayIntersectionWithFilter(arr1, arr2), "filter");

// using reducer

function arrayIntersectionWithReduce(array1, array2) {
  const result = array1.reduce((acc, cur) => {
    if (array2.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return result;
}

console.log(arrayIntersectionWithReduce(arr1, arr2), "reduce");
