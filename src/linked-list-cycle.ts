// 141. 环形链表
// https://leetcode.cn/problems/linked-list-cycle/description/

/**
 * Definition for singly-linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function hasCycle(head: ListNode | null): boolean {
  let ret = false;
  if (!head || !head.next) return ret;
  const set = new Set();
  let current = head;
  while (current.next) {
    if (!set.has(current)) {
      set.add(current);
      current = current.next;
    } else {
      ret = true;
      break;
    }
  }
  return ret;
}
const run = () => {
  const specialNode = new ListNode(500);
  const node = new ListNode(1, new ListNode(2, new ListNode(3, specialNode)));
  specialNode.next = node.next;
  const node2 = new ListNode(1, new ListNode(2, new ListNode(3)));
  console.log("hasCycle:", hasCycle(node));
  console.log("hasCycle:", hasCycle(node2));
};
export default run;
