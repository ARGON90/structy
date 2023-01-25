let str = 'hello';

function reverseStr(str) {

  //base case
  if (str === '') return '';

  //recursive step
  return str.slice(-1) + reverseStr(str.slice(0, str.length - 1));
  //      last letter  +  whatever is returned from reducing str length by 1

}
console.log(reverseStr(str));
