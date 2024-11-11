// 选择排序;
// 每次从未排序的部分选择最小的元素放到已排序部分的末尾。

function selectionSort(arr: number[]): number[] {
  const result = [...arr];
  const len = result.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [result[i], result[minIndex]] = [result[minIndex], result[i]];
    }
  }
  return result
}
const run = () => {
  let arr = [5, 3, 2, 4, 1];

  console.log(selectionSort(arr)); // 输出: [1, 2, 3, 4, 5]
};
export default run;
