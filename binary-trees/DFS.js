const depthFirstValues = (root) => {

    if (root === null) return [];
    let stack = [root];
    let res = [];
    while (stack) {
        let current = stack.pop();
        res.push(current.val);
        console.log(res)

        if (current.left) current = current.left;
        if (current.right) current = current.right;
    }

    return res;

}

const treeLevels = (root) => {
    if (root === null) return [];
    const levels = [];

    const stack = [{ node: root, levelNum: 0 }];
    while (stack.length > 0) {
      let { node, levelNum } = stack.pop();

      //level you need does NOT exist yet - remember that indexes start at 0

      if (levels.length === levelNum) {
      //eg if levels.length is 1, and levelNum is 1, there's only one item in the array, but
      //you need to add another array for levelNum of one
        levels.push( [node.val] )

      } else {
        //else the index you need already exists
        levels[levelNum].push(node.val)
      }

      if (node.right) stack.push({ node: node.right, levelNum: levelNum + 1 })
      if (node.left) stack.push({ node: node.left, levelNum: levelNum + 1 })
    }

    return levels

  }


  // INVERT BT LC 226
