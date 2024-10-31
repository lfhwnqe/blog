// https://leetcode.cn/problems/path-sum/submissions/577274997/
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node?.left && !node?.right) {
      if (node.val === targetSum) {
        return true;
      }
    }
    if (node?.left !== null) {
      node.left.val += node.val;
      stack.push(node.left);
    }
    if (node?.right !== null) {
      node.right.val += node.val;
      stack.push(node.right);
    }
  }
  return false;
}

const run = () => {
  const root = new TreeNode(3);
  root.left = new TreeNode(9);
  // root.left.left = new TreeNode(100);
  // root.left.right = new TreeNode(500);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(15);
  root.right.right = new TreeNode(7);
  // console.log("root:", root);
  const ret = hasPathSum(root, 3);
  console.log("ret:", ret);
};
export default run;
