const breadthFirstValues = (root) => {

    if (!root) return []
    let stack = [root]
    let res = []
    while (stack.length > 0) {
      let current = stack.shift();
      res.push(current.val)
      console.log(res)

      if (current.left) stack.push(current.left)
      if (current.right) stack.push(current.right)
    }
    return res;
  };
