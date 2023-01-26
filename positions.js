const nonAdjacentSum = (nums, i = 0, memo={}) => {
  if (i in memo) return memo[i];
  //i is index of num you're making decision for
  if (i >= nums.length) return 0;
  //this means you're done looking at all numbers

  const includesFirstNum = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  const excludesFirstNum = nonAdjacentSum(nums, i + 1, memo);

  memo[i] = Math.max(includesFirstNum, excludesFirstNum);
  return memo[i];
};

