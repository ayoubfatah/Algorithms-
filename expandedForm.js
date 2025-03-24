function expandedForm(num) {
  const places = Array.from({ length: 20 }, (_, i) => Math.pow(10, i));

  return places
    .map((value) => {
      if (value === 1) {
        return num % 10;
      } else {
        return (
          // prettier-ignore
          Math.trunc((num % (value * 10)) / value) * value
        );
      }
    })
    .filter((value) => value !== 0)
    .reverse()
    .join(" + ");
}

// prettier-ignore
const expandedForm2 = (n) =>n.toString().split("").reverse().map((a, i) => a * Math.pow(10, i)).filter((a) => a > 0).reverse().join(" + ");
console.log(expandedForm(1234));
