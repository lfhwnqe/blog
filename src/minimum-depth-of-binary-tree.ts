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

function minDepth(node: TreeNode | null): number {
  if (!node) return 0;
  const queue = [{ node, depth: 1 }];
  while (queue.length) {
    const { node, depth } = queue.shift();
    if (!node.right && !node.left) return depth;
    if (node.left) queue.push({ node: node.left, depth: depth + 1 });
    if (node.right) queue.push({ node: node.right, depth: depth + 1 });
  }
  return 1;
}

const run = () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  // root.left.left = new TreeNode(100);
  // root.left.right = new TreeNode(500);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);
  // console.log("root:", root);
  const ret = minDepth(root);
  console.log("ret:", ret);
};
export default run;
