// leetcode 198. 打家劫舍
//  https://leetcode.cn/problems/house-robber/

// 状态转移方程 dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
}

const run = () => {
  let array = [2, 1, 1, 2];
  console.log("Sorted array is:", rob(array));
};
export default run;
