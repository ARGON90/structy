const createCombinations = (items, k) => {
  // not enough items to support combination length
  // return an empty array, means you have NO combinations to offer
  // non-nested [] means you have NO combinations
  if (k > items.length) {
    return [];
  }
  // target length is 0, return empty result
  // find combinations of length 0, there's only ONE
  // combination you can offer, [], so return one combination,
  // remember it needs to be nested[[]]
  if (k === 0) {
    return [[]]
  };

  const first = items[0]
  // logic: exclude the first item in the list, and loop it into other arrays when they've bubbled up
  // ALSO need to decrease the k, the array size

  // decreasing the k here will help us generate all possibilities of a number
  // [a, b, c, d] (k3) -> Start with this, take the first letter out
  // [b, c, d] k(3) -> can only return this one combination whereas
  // [b, c, d] k(2) -> will return all partial combinations of these letters
  const partialCombos = createCombinations(items.slice(1), k - 1)
  const combosWithFirst = []

  for (let partialCombo of partialCombos) {
    combosWithFirst.push([ first, ...partialCombo]);
  }

  const combosWithoutFirst = createCombinations(items.slice(1), k);

  return [...combosWithFirst, ...combosWithoutFirst ];
};

console.log(createCombinations(["a", "b", "c", "d"], 3)); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]
