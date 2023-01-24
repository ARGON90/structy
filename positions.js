const knightAttack = (n, kr, kc, pr, pc) => {
  let visited = new Set();
  let queue = [ [kr, kc, 0] ];
  let pawnPos = pr + ',' + pc;

  while (queue.length) {
    let [row, col, len] = queue.shift();
    let pos = row + ',' + col;

    //inbounds
    let rowInbounds = 0 <= row && row < n;
    let colInbounds = 0 <= col && col < n;
    if (!rowInbounds || !colInbounds) continue;

    //not in visited
    if (visited.has(pos)) continue;
    visited.add(pos)

    //takes pawn
    if (pos === pawnPos) return len;

    let directions = [ [2, 1], [1, 2], [-2, 1], [-1, 2], [-2, -1], [-1, -2], [2, -1], [1, -2] ]
    for (let direction of directions) {
      let [rd, cd] = direction;
      let newRow = row + rd;
      let newCol = col + cd;

      queue.push([newRow, newCol, len + 1])
    }
  }
  return false;
};


console.log(knightAttack(8, 1, 1, 2, 2)); // -> 2
