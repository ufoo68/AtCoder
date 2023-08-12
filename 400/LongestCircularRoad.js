const dfs = (s, n, graph) => {
  const stack = [s];
  let dists = [...Array(n)].fill(-1);
  dists[s - 1] = 0;
  while (stack.length > 0) {
    const v = stack.pop();
    for (const nv of graph[v - 1]) {
      if (dists[nv - 1] === -1) {
        stack.push(nv);
        dists[nv - 1] = dists[v - 1] + 1;
      }
    }
  }
  return dists;
};

const main = (input) => {
  input = input.trim().split("\n");
  const n = parseInt(input[0], 10);
  const graph = Array(n)
    .fill()
    .map((_) => Array());
  for (let i = 1; i < n; i++) {
    const [a, b] = input[i]
      .trim()
      .split(" ")
      .map((n) => parseInt(n, 10));
    graph[a - 1].push(b);
    graph[b - 1].push(a);
  }
  const dists0 = dfs(1, n, graph);
  let dists0Max = -1;
  let dists0MaxNode = -1;
  for (let v = 0; v < n; v++) {
    if (dists0Max < dists0[v]) {
      dists0Max = dists0[v];
      dists0MaxNode = v + 1;
    }
  }
  const dists = dfs(dists0MaxNode, n, graph);
  let distsMax = -1;
  for (let v = 0; v < n; v++) {
    distsMax = Math.max(distsMax, dists[v]);
  }
  console.log(distsMax + 1);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
