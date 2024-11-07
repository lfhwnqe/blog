// 图的邻接表示
//      A
//     / \
//   B    C
//  / \   /
// D  E  F
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};
const dfsMemoization = (graph, start) => {
  const visited = new Set();
  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    console.log("node:", node);

    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }
  }
  dfs(start);
};
const bfsPriorityQueue = (graph, start) => {
  const visited = new Set();
  const queue = [];
  queue.push(start);
  while (queue.length) {
    const node = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);
    console.log("node:", node);
    const neighbors = graph[node];
    for (const neighbor of neighbors) {
      queue.push(neighbor);
    }
  }
};
const run = () => {
  dfsMemoization(graph, "A");
  bfsPriorityQueue(graph, "A");
};
export default run;
