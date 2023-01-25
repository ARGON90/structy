let nums = [-1, 0, 2, 3, 4, 5, 7, 8, 9, 10, 20]

function binarySearch(nums, x, left, right) {
  let midPoint = Math.floor((left + right) / 2)

  //base cases
  if (left > right) return -1
  if (nums[midPoint] === x) return midPoint

  //recursive steps
  if (nums[midPoint] > x) {
    //if the current midpoint is BIGGER than the target
    //keep left index the same, decrease right index to the midpoint - 1
    return binarySearch(nums, x, left, midPoint - 1)
  } else {
    //if current midpoint is SMALLER than the target
    //keep right index the same, increase left index to the midpoint + 1
    return binarySearch(nums, x, midPoint + 1, right);
  }
}
console.log(binarySearch(nums, 7, 0, nums.length - 1 ));

// midpoint === target return index of 6
// binarySearch(nums, 7, 6, 7) [7, 8] midpoint value is 7                                  --> 6
// binarySearch(nums, 7, 6, 10) [7, 8, 9, 10, 20] midpoint value is 9                      --> 6
// binarySearch(nums, 7, 0, 10,) [-1, 0, 2, 3, 4, 5, 7, 8, 9, 10, 20] midpoint values is 5 --> 6
