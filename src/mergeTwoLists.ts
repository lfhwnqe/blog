// 21. 合并两个有序链表
// https://leetcode.cn/problems/merge-two-sorted-lists/
import ListNode from "./interface/listNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummyNode = new ListNode(0);
  let cur = dummyNode;
  while (list1 && list2) {
    if (list1.val < list2?.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  if (list1) {
    cur.next = list1;
  } else if (list2) {
    cur.next = list2;
  }
  return dummyNode.next;
}
const run = () => {
  const specialNode = new ListNode(500);
  const node = new ListNode(1, new ListNode(2, new ListNode(3, specialNode)));
  const node2 = new ListNode(1, new ListNode(2, new ListNode(3)));
  console.log("hasCycle:", mergeTwoLists(node, node2));
};
export default run;
