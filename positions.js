function canColor(graph) {

let set = new Set();
let color = 'red';

for (let node of graph) {
  let currentNodes = graph[node];
  for (let neighbor of currentNodes) {
    if (set.has(neighbor)) continue;
    
  }

}

}

canColor({
  x: ["y"],
  y: ["x","z"],
  z: ["y"]
}); // -> true
