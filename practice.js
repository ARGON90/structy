function minStart(arr) {

    let x = 0;
    let minVal = 0;
    for (let num of arr) {
        let nextNum = num + x
        if (nextNum < 1) {
            console.log(minVal, 'minVal')
            minVal += nextNum * -1 + 1
            console.log(nextNum, 'next num')
        }
        x += num

    }
    console.log(x, 'x final')
    return minVal;
}

let arr =[10, -5, 4, -2, 3, 1, -1, -6, -1, 0, 5]
console.log(minStart(arr))
