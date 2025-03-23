function persistence(number) {
  let result = 1;
  let index = 0;
  function repeat(number) {
    if (number < 10) {
      result = number;
      return;
    }
    index++;
    const array = String(number).split("");
    let sum = 1;

    for (let i = 0; i < array.length; i++) {
      sum = sum * +array[i];
    }
    repeat(sum);
  }
  repeat(number);
  return index;
}

const result = persistence(999);
console.log(result, "result");
