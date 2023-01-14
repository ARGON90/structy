//framework
const linkedListValues = (head) => {
  let res = [];
  let current = head;
  while (current !== null) {
    res.push(current.val);
    current = current.next;
  }
  return res;
};
