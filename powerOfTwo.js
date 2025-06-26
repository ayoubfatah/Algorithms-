// Given an integer n , return true if it is a power of two . Otherwise return false
// an integer n is a power of two if there exists an integer x such than n === 2^x

// doing it with a loop
function powerOfTwoWithLoop(n) {
  for (let power = 1; power <= n; power *= 2) {
    if (n === power) {
      return true;
    }
  }
  return false;
}

console.log(powerOfTwoWithLoop(8));
console.log(powerOfTwoWithLoop(32));
console.log(powerOfTwoWithLoop(16));
console.log(powerOfTwoWithLoop(64));
console.log(powerOfTwoWithLoop(128));
console.log(powerOfTwoWithLoop(125));
console.log(powerOfTwoWithLoop(126));

// follow up : could you solve it without loops/recursion
console.log("---USING & ---");
// using the &  operation

// 2^0 = 1 === 1
// 2^1 = 2 === 10
// 2^2 = 4 === 100
// 2^3 = 8 === 1000
// 2^4 =16 === 10000
// 2^5 =32 === 100000
// 2^6 =64 === 1000000



function powerOfTwo(n) {
  return n > 0 && (n & (n - 1)) === 0;
}
console.log(powerOfTwo(8));
console.log(powerOfTwo(32));
console.log(powerOfTwo(16));
console.log(powerOfTwo(64));
console.log(powerOfTwo(128));
console.log(powerOfTwo(125));
console.log(powerOfTwo(126));



// 4 0000000000000100
// 2 0000000000000010
//   0000000000000110






// 9 = 8 + 1
// 9 = 2^3 + 2^0

//15 => 8 + 4 + 2 +1
//  =>  01111
//16 => 10000







