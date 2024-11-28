// 455. 分发饼干
// https://leetcode.cn/problems/assign-cookies/

// 贪心算法
function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let child = 0,
    cookie = 0;
  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) {
      child++;
    }
    cookie++;
  }
  return child;
}

const run = () => {
  console.log("run");

  console.log("guessNumber:", findContentChildren([1, 2, 3], [1, 1]));
};
export default run;
