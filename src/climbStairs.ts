// leetcode 70. 爬楼梯
// https://leetcode.cn/problems/climbing-stairs/
// 动态规划
// 大问题拆解成小问题，并存储起来（存储避免重复计算）
// 当我们要到达第n阶时:
// - 可以从第n-1阶爬1步上来
// - 也可以从第n-2阶爬2步上来
// 与斐波那契数计算一个道理：到达n阶的方法 = 到达第n-1阶的方法数 + 到达第n-2阶的方法数
function climbStairs(n: number): number {
  let fibArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray[n];
}

function fib(n) {
  let fibArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  return fibArray[n];
}
const run = () => {
  const ret = climbStairs(3);
  const fibNum = 5;
  // console.log("fib:", fib(fibNum));

  console.log("ret:", ret);
};
export default run;
