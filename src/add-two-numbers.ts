// 2. 两数相加
// https://leetcode.cn/problems/add-two-numbers/submissions/572756461/
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // 如果两个数都没有值且积===0 结束并且返回节点
  let carry = 0;
  const node = new ListNode(0);
  let current = node;
  // 遍历l1 l2，如果有next或者reduce有值就把它们都加起来
  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    // 如果加起来大于10，reduce=1
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }
  return node.next;
}
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// 使用示例
const printLinkedList = (head: ListNode | null) => {
  const arr = linkedListToArray(head);
  console.log(arr);
};
const run = () => {
  const node = new ListNode(
    1,
    new ListNode(2, new ListNode(6, new ListNode(4, new ListNode(5))))
  );
  const node2 = new ListNode(1, new ListNode(9, new ListNode(7)));
  console.log("printLinkedList:", printLinkedList(addTwoNumbers(node, node2)));
};
export default run;
