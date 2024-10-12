// 237. 删除链表中的节点
// https://leetcode.cn/problems/delete-node-in-a-linked-list/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteNode(node: ListNode | null): void {
  if (!node || !node.next) return;
  node.val = node.next.val;
  node.next = node.next.next;
  return;
}

const run = () => {
  const node = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  );
  console.log("node:", node);

  console.log("deleteNode:", deleteNode(node!.next!.next));
  const node2 = new ListNode(1, new ListNode(2, new ListNode(3)));
  console.log("node2:", node2);
  console.log("deleteNode:", deleteNode(node2));
};
export default run;
