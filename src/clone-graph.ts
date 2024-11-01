// https://leetcode.cn/problems/clone-graph/
class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;
  const visited = new Map();
  const stack = [];
  const clone = new _Node(node.val, []);
  visited.set(node, clone);
  stack.push(node);
  while (stack.length > 0) {
    const cur = stack.pop();
    const cloneCur = visited.get(cur);
    for (let neighbor of cur?.neighbors) {
      if (!visited.has(neighbor)) {
        const cloneNeighbor = new _Node(neighbor.val, []);
        visited.set(neighbor, cloneNeighbor);
        stack.push(neighbor);
      }
      cloneCur.neighbors.push(visited.get(neighbor));
    }
  }
  return clone
}

const run = () => {
  // console.log("root:", root);
  const root1 = new _Node(1);
  const root2 = new _Node(2);
  const root3 = new _Node(4);
  const root4 = new _Node(4);
  root1.neighbors = [root2, root4];
  root2.neighbors = [root1, root3];
  root3.neighbors = [root2, root4];
  root4.neighbors = [root1, root3];
  const ret = cloneGraph(root1);
  console.log('ret:',ret);
  
};
export default run;
