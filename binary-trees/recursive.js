class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;

 a = new Node(3);
 b = new Node(11);
 c = new Node(10);
 d = new Node(4);
 e = new Node(-2);
 f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     10
//  / \      \
// 4   -2     1


//BASIC PATTERN
const recursiveSum = (root) => {
    if (root === null) return 0;

    return root.val + recursiveSum(root.left) + recursiveSum(root.right)
}



//SEARCHING FOR A TARGET
const treeIncludes = (root, target) => {
    if (root === null) return false
    if (root.val === target) return true;

    return treeIncludes(root.left, target) || treeIncludes(root.right, target)
}

const pathFinder = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [root.val];

    let leftPath = pathFinder(root.left, target)
    let rightPath = pathFinder(root.right, target)

    if (leftPath !== null) {
        return [root.val, ...leftPath]
    }
    if (rightPath !== null) {
        return [root.val, ...rightPath]
    }

    return null;
}



//USING MAX / MIN VALUES
const treeMinValue = (root) => {
    if (root === null) return Infinity;

    let leftPath = treeMinValue(root.left)
    let rightPath = treeMinValue(root.right)

    return Math.min(root.val, leftPath, rightPath)

}

const maxPathSum = (root) => {
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;

    let leftPath = maxPathSum(root.left)
    let rightPath = maxPathSum(root.right)

    return root.val + Math.max(leftPath, rightPath)
}


//TREE HEIGHT & PATHS
const howHigh = (root) => {
    if (root === null) return -1;

    let leftPath = howHigh(root.left)
    let rightPath = howHigh(root.right)

    return 1 + Math.max(leftPath, rightPath)
}

const allTreePaths = (root) => {
    //empty tree
    if (root === null) return []

    //if we're at a leaf, need to return a subarray starting off the path of this node
    if (root.left === null && root.right === null) return [ [root.val] ]

    //gather paths to return
    let paths = [];

    //recursive step, we're getting a 2D array of all subpaths through this subtree;
    let leftSubPaths = allTreePaths(root.left)

    //iterate through subpaths, add the root value
    for (let subPath of leftSubPaths) {
        paths.push([root.val, ...subPath])
    }

    let rightSubPaths = allTreePaths(root.right)
    for (let subPath of rightSubPaths) {
        paths.push([root.val, ...subPath])
    }

    return paths;
}


//INVERT BINARY TREEE
var invertTree = function(root) {

    //base case, don't do anything?
    
    if (!root) return null

    //switch left and right, return root
    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root

};
