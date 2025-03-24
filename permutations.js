function permutations(str) {
  const result = new Set();

  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      result.add(path);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      backtrack(path + remaining[i], newRemaining);
    }
  }

  backtrack("", str);
  return [...result];
}

console.log(permutations("acf"));
