const subsets = (elements) => {
  //base case - answer always includes empty subset
  //answer will be an array of arrays, so it needs to be nested
  if (elements.length === 0) return [[]];

  const first = elements[0];
  const subsetsWithoutFirst = subsets(elements.slice(1));
  const subsetsWithFirst = [];
  for (let sub of subsetsWithoutFirst) {
    subsetsWithFirst.push([first, ...sub]);
  };
  console.log(subsetsWithoutFirst, subsetsWithFirst)
  return [ ...subsetsWithoutFirst, ...subsetsWithFirst ];
};


console.log(subsets(['a', 'b', 'c'])); // ->
// [
//   [],
//   [ 'c' ],
//   [ 'b' ],
//   [ 'b', 'c' ],
//   [ 'a' ],
//   [ 'a', 'c' ],
//   [ 'a', 'b' ],
//   [ 'a', 'b', 'c' ]
// ]
