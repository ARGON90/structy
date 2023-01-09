const dfs = (graph, source) => {
    const stack = [source];

    while (stack.length > 0) {
        const current = stack.pop();
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}
