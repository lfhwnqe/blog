// 374. 猜数字大小
// https://leetcode.cn/problems/guess-number-higher-or-lower/

function guess(num: number): number {
  // 假设pick是被猜测的数字
  const pick = 6; // 这里可以设置任意值

  if (num > pick) return -1;
  if (num < pick) return 1;
  return 0;
}

function guessNumber(n: number): number {
  let left = 1;
  let right = n;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    const result = guess(middle);
    if (result === 0) return middle;
    if (result === 1) left = middle + 1;
    else right = middle - 1;
  }
  return left
}

const run = () => {
  console.log('run');
  
  console.log("guessNumber:", guessNumber(8));
};
export default run;
