// leecode 101. 对称二叉树
// https://leetcode.cn/problems/symmetric-tree/
import TreeNode from "./interface/treeNode";

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 == null && node2 == null) return true;
    if (node1 == null || node2 == null) return false;
    return (
      node1.val == node2.val &&
      isMirror(node1.left, node2.right) &&
      isMirror(node1.right, node2.left)
    );
  }

  return isMirror(root?.left, root?.right);
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
  const ret = isSymmetric(root);
  console.log("ret:", ret);
};
export default run;
