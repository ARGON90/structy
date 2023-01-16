


const largestComponent = (graph) => {
  let visited = new Set();
  let max = 0;
  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    max = Math.max(max, size)
  }
  return max;

};

function exploreSize(graph, node, visited) {
  if (visited.has(node)) return 0;
  visited.add(node)
  let size = 1 //represents current node
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited); //should return a number
  }
  return size;
}


console.log(largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
})); // -> 4
