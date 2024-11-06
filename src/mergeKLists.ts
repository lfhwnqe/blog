// 23. 合并 K 个升序链表
// https://leetcode.cn/problems/merge-k-sorted-lists/description/

import ListNode from "./interface/listNode";
import MinHeap from "./interface/minHeapFreq";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const res = new ListNode(0);
  let p = res;
  const h = new MinHeap<any>("val");

  lists.forEach((l) => {
    if (l) h.insert(l as any);
  });

  while (h.size()) {
    const min = h.remove();
    p.next = min;
    p = p.next as any;
    if (min?.next) h.insert(min.next);
  }
  return res.next;
}

const run = () => {
  function createList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
      current.next = new ListNode(val);
      current = current.next;
    }
    return dummy.next;
  }

  // 测试
  const lists = [
    createList([1, 4, 5]),
    createList([1, 3, 4]),
    createList([2, 6]),
  ];
  // console.log("lists:", lists);

  const result = mergeKLists(lists);
  // console.log(result);
};
export default run;
