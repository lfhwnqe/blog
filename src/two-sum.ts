// 1. 两数之和
// https://leetcode.cn/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash.has(complement)) {
      return [hash.get(complement), i];
    }
    hash.set(nums[i], i);
  }
  return [];
}

const run = () => {
  const arr = [2, 7, 11, 15],
    target = 9;
  console.log(twoSum(arr, target));
};
export default run;
