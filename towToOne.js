function towToOne(str1, str2) {
  const set = new Set([...str1, ...str2]);
  const newArr = [...set];
  const sortedArray = newArr.sort((a, b) => a.localeCompare(b));
  return sortedArray.join("");
}

console.log(towToOne("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
