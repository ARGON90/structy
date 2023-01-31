class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;


const linkedListCycle = (head, set = new Set()) => {
  if (!head.ne)
  let slow = head;

  let fast = head.next;

  while (slow !== null && fast.next !== null) {
    if (slow.val === fast.val) return true;
    slow = slow.next;
    fast = fast.next;
    if (fast.next) {
      fast = fast.next
    } else {
      return false
    }
  }
  return false;
};

//         _______
//       /        \
// a -> b -> c -> d

console.log(linkedListCycle(a));  // true
