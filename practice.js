const maxValue = (nums) => {
    let max = -Infinity;
    for (let num of nums) {
        max = Math.max(num, max)
    }
    return max;
}
