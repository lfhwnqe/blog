// 二分搜索
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const run = () => {
  // 测试数据
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const target = 7;

  console.log(binarySearch(array, target)); // 输出：6
};
export default run;
