// 46. 全排列
// https://leetcode.cn/problems/permutations/
// 回溯算法
function permute(nums: number[]): number[][] {
  const res = [];
  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach((n) => {
      if (path.includes(n)) {
        return;
      }
      backtrack(path.concat(n));
    });
  };
  backtrack([]);
  return res;
}

const run = () => {
  const arr = [1, 2, 3];
  console.log(permute(arr));
};
export default run;
