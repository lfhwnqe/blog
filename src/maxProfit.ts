// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/
// 122. 买卖股票的最佳时机 II
function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
const run = () => {
  // 测试代码
  let arr = [7, 1, 5, 3, 6, 4];
  console.log("maxProfit:", maxProfit(arr));
};
export default run;
