// leetcode 349. 两个数组的交集
//leetcode.cn/problems/intersection-of-two-arrays/description/

// O(m+n)
function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const result = [];
  for (let num of nums2) {
    if (set1.has(num)) {
      result.push(num);
      set1.delete(num);
    }
  }
  return result;
}

const run = () => {
  const num1 = [1, 2, 2, 1];
  const nums2 = [2, 2];
  console.log("intersection(num1, nums2):", intersection(num1, nums2));
};
export default run;
