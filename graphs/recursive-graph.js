const recursive = (graph, source) => {

    for (let neighbor of graph[source]) {
        recursive(graph, neighbor)
    }
    //not explicit base case -- implicit base case since empty array will be looped through
}

const hasPath = (graph, src, dst) => {
    if (src === dst) return true

    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) {
          return true;
        }
    }

    return false;

  };
