// 归并排序
function mergeSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
  const result: number[] = [];
  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      result.push(right.shift() as number);
    } else {
      result.push(left.shift() as number);
    }
  }
  while (left.length) {
    result.push(left.shift() as number);
  }
  while (right.length) {
    result.push(right.shift() as number);
  }
  return result;
}

const run = () => {
  let array = [4, 2, 5, 1, 6, 3];
  console.log("Sorted array is:", mergeSort(array));
};
export default run;
