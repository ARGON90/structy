const nestingScore = (str) => {
  let stack = [0];

  for (let bracket of str) {
    console.log(stack)
    if (bracket === '[') {
      stack.push(0)
    } else {
      let current = stack.pop();
      //pop num off stack
      //if it's 0, add a 1 to the stack
      if (current === 0) {
        stack[stack.length - 1] ++
      } else {
        // if it's a number, multiply that number by two and have that be the new stack sum
        // in this method, stack will be a single value, that of the total
        stack[stack.length - 1] += 2 * current
        // alternate method, stack numbers will need to be summed
        // stack.push(current * 2)
      }
    }
  }
  // let sum = 0;
  // console.log('stack', stack)
  // stack.forEach((el) => {
  //   sum += el
  // })
  let sum = stack[0]
  return sum;
};

console.log(nestingScore("[[][]]")); // -> 4); // -> 5); // -> 129
