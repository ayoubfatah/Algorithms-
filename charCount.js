const str = "rock star ! 2 3";
// what we wanna reach ?
// {r : 2  , o : 1 , c :1 , k : 1 , s :1 , t : 1 , a : 1}
//  we  need to create an object where we will store the characters
// need to turn str to an array with characters [r,o,ck,s,t,a,r]
//  we need to loop over the array and check for each character if it exist in the object we created if so just add +1 if not then we create a key of that character and we give it 1 as the value
const a = "z";
const chart = a.charCodeAt(0);
console.log(122 - 97); // Output: 97

function charCount(str) {
  const string = str.replace(" ", "").toLowerCase().split("");

  const counts = {};
  string.forEach((c) => {
    if (c.charCodeAt(0) < 97 || c.charCodeAt(0) > 122) return;
    if (counts[c] >= 1) {
      counts[c] += 1;
    } else {
      counts[c] = 1;
    }
  });
  return counts;
}

console.log(charCount(str));
