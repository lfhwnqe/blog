// https://leetcode.cn/problems/number-of-recent-calls/
class RecentCounter {
  queen: number[];
  constructor() {
    this.queen = [];
  }

  ping(t: number): number {
    this.queen.push(t);
    while (t - this.queen[0] > 3000) {
      this.queen.shift();
    }
    return this.queen.length;
  }
}

const run = () => {
  // Start Generation(Come to Dream API https://opus.gptuu.com) Here
  const counter = new RecentCounter();
  console.log(counter.ping(1)); // 输出: 1
  console.log(counter.ping(100)); // 输出: 2
  console.log(counter.ping(3001)); // 输出: 3
  console.log(counter.ping(3002)); // 输出: 3
};
export default run;
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
