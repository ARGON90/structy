const pairSum = (nums, sum) => {

    let prevNums = {};

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement = sum / currentNum;
        if (complement in prevNums) {
            return [prevNums[complement], i];
        }
        prevNums[currentNum] = i;
    }
}

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
