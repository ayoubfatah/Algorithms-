// 🧩 Daily Algorithm #3: Best Time to Buy and Sell Stock
// The Problem:
// You are given an array prices where prices[i] is the price of a given stock on the i-th day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

function maxProfit(arr) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < arr.length; i++) {
    const price = arr[i];

    if (price < minPrice) {
      minPrice = arr[i];
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1]));
