

const maxPair =  (nums) => {
    let i = 0;
    let j = 1;
    let max = -Infinity;
    let res;
    while (j < nums.length) {
        let currentSum = nums[i] + nums[j]
        if (currentSum > max) {
            res = [i, j]
            max = currentSum
        }
        i++;
        j++
    }
    return res;
}

maxPair([0, 4, 3, 1, 2, 3, 4, 0])
