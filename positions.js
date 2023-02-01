class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;

const lowestCommonAncestor = (root, val1, val2) => {

  let val1Path = recursiveTreeSum(root, val1);
  let val2Path = recursiveTreeSum(root, val2);
  console.log(val2Path, val1Path);
  let set = new Set(val2Path)
  for (let val of val1Path) {
    if (set.has(val)) {
      return val;
    }
  }
  return val1Path;
};

const recursiveTreeSum = (root, targetVal) => {
  if (root === null) return null;
  console.log(root.val)
  if (root.val === targetVal) return [targetVal];

  const leftPath = recursiveTreeSum(root.left, targetVal);
  const rightPath = recursiveTreeSum(root.left, targetVal);


  if (leftPath !== null) {
    leftPath.push(root.val)
    return leftPath
  }
  if (rightPath !== null) {
    rightPath.push(root.val)
    return rightPath
  }

  return null;
}

console.log(lowestCommonAncestor(a, 'd', 'h')); // b)
