const longestPath = (graph) => {
    let visited = {};
    let longest = 0;
    for (let node in graph) {
        path = explore(graph, node, visited)
        longest = Math.max(path, longest);
    }
    return Math.max(...Object.values(visited));
};

function explore(graph, node, visited) {
    if (node in visited) return visited[node];

    let length = 0;

    for (let neighbor of graph[node]) {
        size = 1 + explore(graph, neighbor, visited);
        length = Math.max(size, length)
    }
    visited[node] = length;
    console.log(visited)
    return visited[node]
}

const graph = {
    a: ['c', 'b'],
    b: ['c'],
    c: [],
    q: ['r'],
    r: ['s', 'u', 't'],
    s: ['t'],
    t: ['u'],
    u: []
};


console.log(longestPath(graph)); // -> 2
