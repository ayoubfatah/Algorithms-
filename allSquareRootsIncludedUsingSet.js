function allSquareRootsIncluded(arr1, arr2) {
  return arr1.every((number) => arr2.includes(Math.sqrt(number)));
}
console.log(allSquareRootsIncluded([1, 2, 1], [4, 4, 1]));

function allSquareRootsIncludedUsingSet(arr1, arr2) {
  const arr2Set = new Set(arr2);
  return arr1.every((number) => arr2Set.has(Math.sqrt(number)));
}

// Example usage:
console.log(allSquareRootsIncluded([1, 4, 9], [1, 2, 3])); // true
console.log(allSquareRootsIncluded([1, 2, 1], [4, 4, 1])); // false
console.log(allSquareRootsIncluded([1, 2, 4], [1, 2])); // false
console.log(allSquareRootsIncluded([1, 4, 9], [1, 2])); // false

// ✅ allSquareRootsIncluded → O(n × m) (slower for large inputs)

// ✅ allSquareRootsIncludedUsingSet → O(n + m) (faster and more efficient)
