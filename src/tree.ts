// 二叉树 深度优先  广度优先
// 定义二叉树节点类
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 定义二叉树类
class BinaryTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // 插入节点
  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 先序遍历（根 -> 左 -> 右）
  preOrder(node: TreeNode<T> | null = this.root) {
    if (!node) return;
    const stack = [node];
    while (stack.length) {
      const current = stack.pop();
      if (!current) return;
      console.log("current:", current.value);
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  // 中序遍历（左 -> 根 -> 右）
  inOrder(node: TreeNode<T> | null = this.root) {
    const stack = [];
    let curr = node;
    const res = [];
    while (curr || stack.length) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop()!;
      res.push(curr.value);
      curr = curr.right;
    }
    return res;
  }

  // 后序遍历（左 -> 右 -> 根）
  postOrder(node: TreeNode<T> | null = this.root) {
    const stack = [];
    const result = [];
    let curr = node;
    let lastVisited = null;
    while (curr || stack.length) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack[stack.length - 1];
      // 关键判断：当前节点能否被访问
      // 1. 没有右子树 或
      // 2. 右子树刚刚被访问过
      if (!curr.right || curr.right === lastVisited) {
        result.push(curr.value);
        lastVisited = curr;
        stack.pop();
        curr = null;
      } else {
        curr = curr.right;
      }
    }
    return result;
  }

  // 广度优先遍历（层次遍历）
  breadthFirst() {
    const node = this.root;
    if (node === null) return;
    const queue = [node];
    while (queue.length) {
      const current = queue.shift();
      if (!current) return;
      console.log("current:", current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}

const run = () => {
  // 使用示例
  const tree = new BinaryTree<number>();
  tree.insert(10);
  tree.insert(6);
  tree.insert(15);
  tree.insert(3);
  tree.insert(8);
  tree.insert(20);

  console.log("Pre-Order Traversal:");
  tree.preOrder(); // 输出顺序：10 6 3 8 15 20

  console.log("In-Order Traversal:");
  console.log(tree.inOrder()); // 输出顺序：3 6 8 10 15 20

  console.log("Post-Order Traversal:");
  console.log(tree.postOrder()); // 输出顺序：3 8 6 20 15 10

  console.log("Breadth-First Traversal:");
  tree.breadthFirst(); // 输出顺序：10 6 15 3 8 20
};
export default run;
