// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(str) {
  function countTotal(string) {
    return string.split("").reduce((sum, c) => sum + (c.charCodeAt(0) - 96), 0);
  }

  const words = str.split(" ");
  let highestWord = "";
  let highestScore = 0;

  for (let i = 0; i < words.length; i++) {
    const score = countTotal(words[i]);
    if (score > highestScore) {
      highestScore = score;
      highestWord = words[i];
    }
  }

  return highestWord;
}

console.log(highX("take me to semynak"));
