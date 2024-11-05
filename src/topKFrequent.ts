// 347. 前 K 个高频元素
// https://leetcode.cn/problems/top-k-frequent-elements/description/

import MinHeap, { FreqItem } from "./interface/minHeapFreq";

function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = new Map();
  for (let num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  // console.log("frequencyMap:", frequencyMap);

  const heap = new MinHeap<FreqItem>("freq");
  frequencyMap.forEach((freq, num) => {
    heap.insert({ num, freq });
    if (heap.size() > k) {
      heap.remove();
    }
  });

  const result: number[] = [];
  while (heap.heap.length !== 0) {
    result.unshift(heap.remove()?.num);
  }
  return result;
}

const run = () => {
  console.log(topKFrequent([2, 2, 3, 3, 1], 2));
};
export default run;
