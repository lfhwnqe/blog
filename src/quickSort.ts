// 快速排序
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const inMiddle = arr.splice(middle, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > inMiddle) {
      right.push(arr[i]);
    }
    if (arr[i] <= inMiddle) {
      left.push(arr[i]);
    }
  }
  return quickSort(left).concat([inMiddle], quickSort(right));
}

const run = () => {
  var arr = [5, 3, 7, 6, 2, 9];

  console.log(quickSort(arr)); // 输出: [2, 3, 5, 6, 7, 9]
};
export default run;
