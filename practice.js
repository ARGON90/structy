function generate(numRows) {

    let res = [[1]]
    for (let i = 1; i < numRows; i ++) {
        res[i] = [];
        let newRow = [];
        let prevRow = res[i - 1]
        for (let j = 0; j <= prevRow.length; j++) {
            let num = 0;
            if (prevRow[j - 1]) num += prevRow[j - 1]
            if (prevRow[j]) num += prevRow[j]
            newRow.push(num)
        }
        res[i] = newRow
    }
    return res;
}

console.log(generate(5))
