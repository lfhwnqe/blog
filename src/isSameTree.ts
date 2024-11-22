// 100. 相同的树
// https://leetcode.cn/problems/same-tree/description/

import TreeNode from "./interface/treeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null || p.val !== q.val) {
    return false;
  }
  return isSameTree(p?.left, q?.left) && isSameTree(p?.right, q?.right);
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
  const ret = isSameTree(root, root);
  console.log("ret:", ret);
};
export default run;
