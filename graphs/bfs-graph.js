const dfs = (graph, source) => {
  const queue = [source];

  while (stack.length > 0) {
    const current = queue.shift();
    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
}


//GRAPH UNDIRECTED PATH EXISTS: TRUE/FALSE,CREATE ADJACENCY LIST
const undirectedPath = (edges, nodeA, nodeB) => {

  let list = {}
  // for (pair of edges) {
  //   let first = pair[0]
  //   let second = pair[1]
  //   list[first] ? list[first].push(second) :
  //     list[first] = [second];
  //   list[second] ? list[second].push(first) :
  //     list[second] = [first];
  // }

  for (pair of edges) {
    const [a, b] = pair;
    if (!(a in list)) list[a] = []
    if (!(b in list)) list[b] = []
    list[a].push(b)
    list[b].push(a)
  }

  let queue = [nodeA]
  let visited = new Set()

  while (queue.length > 0) {
    let current = queue.shift();
    if (visited.has(current)) continue
    visited.add(current)
    if (current === nodeB) return true;
    for (let neighbor of list[current]) {
      queue.push(neighbor)
    }
  }

  return false;
}

//FIND LARGEST COMPONENET
const largestComponent = (graph) => {

  //need visited set and current highest count
  let visited = new Set()
  let highest = 0;

  //loop through every node in the graph, typecasted properly
  for (let node in graph) {
    node = Number(node)
    //set temp variable to compare highest against, start a queue for BFS
    let temp = 0;
    let queue = [node]

    while (queue.length > 0) {
      //first node visited comes from the graph key
      let current = Number(queue.shift())

      //if this node has been visited continue on to the next
      //if NOT visited, push in all of that node's connections && add 1 to count
      if (!(visited.has(current))) {
        for (neighbor of graph[current]) {
          queue.push(neighbor)
        }
        temp += 1
      } else {
        continue
      }

      //add each of these nodes to the visited set
      visited.add(Number(current))
    }

    //the end of every loop should include an entire traversal of connected nodes
    //check if this number beats the previous, if so change highest.
    if (temp > highest) {
      highest = temp;
    }
  }
  console.log(highest)
  return highest
};


//GRIDS
//NO OF ISLANDS
const islandCount = (grid) => {
  let visited = new Set()
  let count = 0;


  //BFS  part of logic
  const bfs = (r, c) => {
    //start off with a queue containing the start point in the graph
    let queue = [[r, c]];
    //list all directions you want to search
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    while (queue.length > 0) {
      let current = queue.shift()
      let [r, c] = current;
      //if this pair is in visited, skip
      if (visited.has(`${r},${c}`)) continue
      visited.add(`${r},${c}`)

      //go through all of the directions to make new coords
      for (item of directions) {
        let [rd, cd] = item
        let row = r + rd
        let col = c + cd
        //check if those coords are on the grid AND they are an L,
        //if so, add them to the queue for further searching
        if (!grid[row] || !grid[row][col]) continue
        if (grid[row][col] === 'L') {
          queue.push([row, col])
        }
      }
    }
  }


  //iterate through each position on the grid if it's not in the visited set
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (visited.has(`${r},${c}`)) continue
      if (grid[r][c] === 'L') {
        bfs(r, c)
        count += 1
      }
      visited.add(`${r},${c}`)
    }
  }
  return count;
};

//SMALLEST ISLAND
const minimumIsland = (grid) => {
  let visited = new Set()
  let count = Infinity;

  const bfs = (r, c) => {
    let temp = 1
    let queue = [[r, c]];
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]

    while (queue.length > 0) {
      let [r, c] = queue.shift()

      for (let direction of directions) {
        let [rd, cd] = direction
        let row = r + rd
        let col = c + cd

        if (visited.has(`${row},${col}`)) continue
        visited.add(`${row},${col}`)
        if (grid[row] && grid[row][col] && grid[row][col] === 'L') {
          queue.push([row, col])
          temp += 1
        }
      }
    }
    if (temp < count) {
      count = temp
    }
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (visited.has(`${r},${c}`)) continue
      visited.add(`${r},${c}`)
      if (grid[r][c] === 'L') {
        bfs(r, c)
      }
    }
  }

  return count;
};


//CLOSEST PATH TO TARGET
const closestCarrot = (grid, startRow, startCol) => {

  let queue = [[startRow, startCol, 1]];
  let visited = new Set();

  while (queue.length > 0) {
    let [r, c, len] = queue.shift();
    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    if (grid[r][c] === 'C') return len

    if (visited.has(`${r},${c}`)) continue
    visited.add(`${r},${c}`)

    for (let direction of directions) {
      let [rd, cd] = direction;
      let row = r + rd
      let col = c + cd

      if (grid[row] && grid[row][col] && grid[row][col] !== 'X') {
        if (grid[row][col] === 'C') return len
        queue.push([row, col, len + 1])
      }
      console.log(len)
    }
  }
  return -1
};
