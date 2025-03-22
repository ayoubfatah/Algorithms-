// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// function IsIsogram(string) {
//   let approve = true;
//   let isIsogram = true;
//   const str = string.split("");
//   if (approve) {
//     for (let i = 0; i < str.length; i++) {
//       for (let j = 0; j < str.length; j++) {
//         if (j !== i) {
//           if (str[i].toLowerCase() === str[j].toLowerCase()) {
//             approve = false;
//             isIsogram = false;
//           }
//         }
//       }
//     }
//   }
//   return isIsogram;
// }

// console.log(IsIsogram("abA"));
// first attempt works but mehh
// second attempt
function isIsogram(string) {
  const str = string.toLowerCase();
  const seen = [];

  for (let i = 0; i < str.length; i++) {
    if (seen.includes(str[i])) return false;
    seen.push(str[i]);
  }
  return true;
}

console.log(isIsogram("abc"));
