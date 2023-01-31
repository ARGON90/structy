class Node {
  constructor(val) {
    this.val = val
    this.next = null

  }
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(7);
const e = new Node(2);
const f = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// const a = new Node(3);
// const b = new Node(2);
// const c = new Node(4);

// a.next = b;
// b.next = c;


// 3 -> 2 -> 7 -> 7 -> 2 -> 3

const linkedPalindrome = (head) => {
  const reverse = reverseList(head);
  const normal = normList(head);
  console.log(normal, reverse)
  return normal === reverse
}

function reverseList(head) {
  if (head === null) return '';
  return `${reverseList(head.next)}` + `${head.val}`;
}
function normList(head) {
  if (head === null) return '';
  return `${head.val}` + `${normList(head.next)}`;
}


console.log(linkedPalindrome(a)); // true
