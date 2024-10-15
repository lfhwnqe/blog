// leetcode 83. 删除排序链表中的重复元素
// https://leetcode.cn/problems/remove-duplicates-from-sorted-list/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let current = head;
  while (current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
}

const run = () => {
  const node = new ListNode(
    1,
    new ListNode(2, new ListNode(2, new ListNode(4, new ListNode(5))))
  );
  console.log("node:", node);
  console.log("deleteNode:", deleteDuplicates(node));
  const node2 = new ListNode(1, new ListNode(2, new ListNode(1)));
  console.log("node2:", node2);
  console.log("deleteNode:", deleteDuplicates(node2));
};
export default run;
