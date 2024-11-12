// 插入排序
function insertionSort(arr: number[]): number[] {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    const key: number = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

const run = () => {
  let array = [12, 11, 13, 5, 6];
  console.log("Sorted array is:", insertionSort(array));
};
export default run;
