class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  const stack = [];
  // 根结点存入栈
  if (root) {
    stack.push(root);
  }
  //   迭代遍历二叉树

  while (stack.length) {
    const node = stack.pop();
    if (!node) break;
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}


const preorderTraversalTest = () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);
  console.log("root:", root);
  const ret = preorderTraversal(root);
  console.log("ret:", ret);
};
export default preorderTraversalTest;
