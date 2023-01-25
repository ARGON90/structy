let num = 5

function sumNums(num) {
  //base case
  if (num === 0) return 0;

  //recursive step
  return sumNums(num - 1) + num

}
console.log(sumNums(num));

// sumNums(0) return 0
// sumNums(1 - 1) + 1  --> 0 + 1
// sumNums(2 - 1) + 2  --> 1 + 2
// sumNums(3 - 1) + 3  --> 3 + 3
// sumNums(4 - 1) + 4  --> 6 + 4
// sumNums(5 - 1) + 5  --> 10 + 5 ==> 15
