class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 2 -> 8 -> 3 -> -1 -> 7

// const sumList = (head) => {
//   let sum = [0];
//   addSum(sum, head);
//   return sum;
// }

// const addSum = (sum, head) => {
//   if (!head) return;
//   sum += head.val
//   console.log(sum)
//   addSum(sum, head.next)
// }

const sumList = (head) => {
  let sum = [0];
  addSum(sum, head);
  let total = 0;
  sum.forEach((num) => total += num)
  return total;
}

const addSum = (sum, head) => {
  if (!head) return;
  sum.push(head.val)
  console.log(sum)
  addSum(sum, head.next)
}


console.log(sumList(a)); // 19
