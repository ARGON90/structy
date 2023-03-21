const maxValue = (nums) => {
    let max = -Infinity;
    for (let num of nums) {
        max = Math.max(num, max)
    }
    return max;
}

const x  = {};
x.bar = {
    'first': 100,
    'second': 200
}
console.log(x.bar['first'] + x['bar'].second)
