// 顺序搜索
function sequentialSearch(arr: number[], num: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

const run = () => {
  // 测试数据

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(sequentialSearch(arr, 5)); // 输出: 4

  console.log(sequentialSearch(arr, 10)); // 输出: -1
};
export default run;
