function longestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const seen = new Set(); // A Set is easier for this

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    while (seen.has(char)) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(char);

    maxLength = Math.max(maxLength, right - left + 1);
  }
  console.log(seen);
  return maxLength;
}
