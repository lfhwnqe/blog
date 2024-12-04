// https://leetcode.cn/problems/subsets/
// 78. 子集
function subsets(nums: number[]): number[][] {
  let res = [];
  dfs([], 0);
  return res;
  function dfs(current, index) {
    res.push(current);
    for (let i = index; i < nums.length; i++) {
      dfs([...current, nums[i]], i + 1);
    }
  }
}

// function subsets(nums: number[]): number[][] {
//   const result: number[][] = [];
  
//   // 递归辅助函数
//   function backtrack(start: number, current: number[]) {
//       result.push([...current]); // 将当前子集加入结果
      
//       for(let i = start; i < nums.length; i++) {
//           current.push(nums[i]); // 选择当前数字
//           backtrack(i + 1, current); // 递归
//           current.pop(); // 回溯,移除当前数字
//       }
//   }
  
//   backtrack(0, []);
//   return result;
// }
const run = () => {
  const ret = subsets([1, 2, 3]);
  console.log("ret:", ret);
};
export default run;
