// leetcode 104. 二叉树的最大深度
// https://leetcode.cn/problems/maximum-depth-of-binary-tree/
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

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const stack = [{ node: root, depth: 1 }];
  let depth = 1;
  while (stack.length) {
    const { node, depth: currentDepth } = stack.pop();
    depth = Math.max(depth, currentDepth);
    if (node?.left) stack.push({ node: node.left, depth: currentDepth + 1 });
    if (node?.right) stack.push({ node: node.right, depth: currentDepth + 1 });
  }
  return depth;
}

const run = () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);
  // console.log("root:", root);
  const ret = maxDepth(root);
  console.log("ret:", ret);
};
export default run;
