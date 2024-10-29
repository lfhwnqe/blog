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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const q = [root];
  const res = [];
  while (q.length) {
    let len = q.length;
    res.push([]);
    while (len--) {
      const n = q.shift();
      res[res.length - 1].push(n.val);
      if (n?.left) q.push(n.left);
      if (n?.right) q.push(n.right);
    }
  }
  return res;
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
  const ret = levelOrder(root);
  console.log("ret:", ret);
};
export default run;
