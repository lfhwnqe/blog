// 215. 数组中的第K个最大元素
// https://leetcode.cn/problems/kth-largest-element-in-an-array/description/

import MinHeap from "./interface/minHeap";

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    if (minHeap.heap.length < k) {
      minHeap.insert(nums[i]);
    } else if (nums[i] > minHeap.heap[0]) {
      minHeap.heap[0] = nums[i];
      minHeap.heapifyDown(0);
    }
  }
  return minHeap.heap[0];
}

const run = () => {
  console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
};
export default run;
