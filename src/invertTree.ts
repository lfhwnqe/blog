// https://leetcode.cn/problems/invert-binary-tree/

import TreeNode from "./interface/treeNode";

// 226. 翻转二叉树
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
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
  const ret = invertTree(root);
  console.log("ret:", ret);
};
export default run;
