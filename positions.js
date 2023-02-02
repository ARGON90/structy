const tolerantTeams = (list) => {
  let rivals = {};
  let graph = converter(list)

  for (let node in graph) {
    if (!(node in rivals) && traverse(graph, node, rivals, false) === false) {
      return false;
    }
  }
  console.log(rivals)
  return true;
}

function traverse(graph, node, rivals, currentRival) {
  if (node in rivals) {
    if (rivals[node] === currentRival) {
      return true;
    } else {
      return false;
    };
  };
  rivals[node] = currentRival;
  for (let neighbor of graph[node]) {
    if (!traverse(graph, neighbor, rivals, !currentRival)) {
      return false
    }
  }
  return true;
}

function converter(graph) {
  let list = {}
  for (let pair of graph) {
    let [a, b] = pair;
    if (!list[a]) list[a] = [];
    if (!list[b]) list[b] = [];
    list[a].push(b);
    list[b].push(a);
  }
  return list
}

console.log(tolerantTeams([
  ['philip', 'seb'],
  ['raj', 'nader'],
  ['raj', 'philip'],
  ['seb', 'raj']
])); // -> false
