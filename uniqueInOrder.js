// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

function uniqueInOrder(str) {
  const array = Array.isArray(str) ? str : str.split("");
  const unique = [];

  for (let i = 0; i < array.length; i++) {
    if (unique.at(-1) !== array[i]) {
      unique.push(array[i]);
    }
  }
  return unique;
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
