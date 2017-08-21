/**
 * @id: 121
 * @title: Best Time to Buy and Sell Stock
 * @url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/#/description
 *
 * @by: Alex Yan <yanhao1991@gmail.com>
 * @date: 2017-08-07
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0]
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    const np = prices[i] - min
    if (np > profit) {
      profit = np
    } else if (prices[i] < min) {
      min = prices[i]
    }
  }

  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5)
console.log(maxProfit([7, 6, 4, 3, 1]), 0)
