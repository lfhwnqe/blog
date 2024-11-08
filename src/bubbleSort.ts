// 冒泡排序
const bubbleSort = (arr: number[]): number[] => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
const run = () => {
  // 测试代码
  let arr = [5, 3, 8, 4, 6];
  console.log("原始数组:", arr);
  console.log("排序后:", bubbleSort(arr));
  console.log("原数组不变:", arr);
};
export default run;
