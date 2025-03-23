function humanReadable(num) {
  const hours = Math.trunc(num / 3600);
  const min = Math.trunc((num % 3600) / 60);
  const sec = num % 60;

  const factored = `${hours >= 10 ? hours : `0${hours}`}:${
    min >= 10 ? min : `0${min}`
  }:${sec >= 10 ? sec : `0${sec}`}`;
  return factored;
}

console.log(humanReadable(36111));
