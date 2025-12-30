// 🧩 Daily Algorithm #1: Valid Anagram
// The Problem:
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// (An Anagram is a word formed by rearranging the letters of a different word, using all the original letters exactly once).

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const object = {};

  for (const element of s) {
    object[element] = (object[element] || 0) + 1;
  }
  for (const element of t) {
    if (!object[element]) {
      return false;
    }
    object[element]--;
  }
  return true;
}

console.log(isAnagram("anagramm", "nagaaram"));
