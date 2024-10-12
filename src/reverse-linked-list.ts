// 206. 反转链表
// https://leetcode.cn/problems/reverse-linked-list/

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
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const current = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return current;
}
const run = () => {
  const node = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  );
  console.log("reverseList:", reverseList(node));
  const node2 = new ListNode(1, new ListNode(2, new ListNode(3)));
  console.log("reverseList:", reverseList(node2));
};
export default run;
