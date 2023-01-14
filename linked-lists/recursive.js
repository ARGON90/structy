//framework - might be a pass by reference error here with primitives!!!
const linkedListValues = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
}

const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
}

//framework (add all nodes together)
const sumList = (head) => {
    if (!head) return 0;
    return head.val + sumList(head.next);
  }

//reversing LL
const reverseList = (head, prev = null) => {
    if (head === null) return prev;
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
  }
