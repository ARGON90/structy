const compress = (str) => {
    let res = [];
    let i = 0;
    let j = 0;

    while (j <= str.length) {
        if (str[i] !== str[j]) {
            let num = j - i;
            if (num === 1) {
                res.push(str[i])
            } else {
                console.log(typeof num)
                res.push(num, str[i])
            }
            i = j
        } else {
            j++
        }

    }
    return res.join('');
};


console.log(compress("ssssbbz"));

let arr = []
arr.push(3, 5)
arr.push('k', 3)
// console.log(arr)
