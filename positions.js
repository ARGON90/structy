const summingSquares = (n, memo = {} ) => {
  if (n in memo) return memo[n];

  if (n === 0) return 0;

  let minSquares = Infinity;

  //we take sqrt(n) because we know the square of that will sum
  //to be the number itself, so we don't need to exceed that.
  //Numbers large than sqrt(n) will be too large anyways.
  for (let i = 1; i <= Math.sqrt(n); i ++) {
    const square = i * i;
    //for the recursive step, you need to count 1 for each successive subtraction
    const numSquares = 1 + summingSquares(n - square)

    //this will never return a negative number, so we don't need to worry about
    //an extra guarding case or base case
    //Since 1 is a perfect square, all branching paths will have an answer
    //because you can subtract by 1 until you hit 0
    minSquares = Math.min(minSquares, numSquares);
  }


  return minSquares;
};
