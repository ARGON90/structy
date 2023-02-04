const compress = (str) => {
    let res = [];
    let i = 0;
    let j = 1;


    while (j < str.length) {

        if (str[i] !== str[j]) {
            //different
            let num = j - i;
            res.push('3', str[i])
            i = j
        } else {
            //same
        }
        j ++
    }
    return res;
};



console.log(compress("nnneeeeeeeeeeeezz"));

let arr = []
arr.push(3, 5)
arr.push('k', 3)
// console.log(arr)
