
//pre-emptive scheduling
function getTotalExecutionTime(n, logs) {

    let map = {};
    let time = 0;
    let prevFunctionTimeStamp = 0;
    for (let i = 0; i < logs.length; i++) {
        let thisEntryArr = logs[i].split(":")
        let thisFunctionNumber = thisEntryArr[0]
        let thisFunctionCommand = thisEntryArr[1]
        let thisFunctionTimeStamp = Number(thisEntryArr[2])

        //if function isn't in map, put it there
        if (!map[thisFunctionNumber]) {
            map[thisFunctionNumber] = 0;
        }


        if (thisFunctionCommand === 'start') {
            let nextEntryArr = logs[i + 1].split(":")
            let nextFunctionNumber = nextEntryArr[0]
            let nextFunctionCommand = nextEntryArr[1]
            let nextFunctionTimeStamp = Number(nextEntryArr[2])
            console.log(thisFunctionNumber, map[thisFunctionNumber], nextFunctionTimeStamp, thisFunctionTimeStamp)
            map[thisFunctionNumber] += nextFunctionTimeStamp - thisFunctionTimeStamp
        }

        if (thisFunctionCommand === 'end') {
            let prevEntryArr = logs[i - 1].split(":")
            let prevFunctionNumber = prevEntryArr[0]
            let prevFunctionCommand = prevEntryArr[1]
            let prevFunctionTimeStamp = Number(prevEntryArr[2])
            console.log(thisFunctionNumber, map[thisFunctionNumber], thisFunctionTimeStamp, prevFunctionTimeStamp)
            map[thisFunctionNumber] += thisFunctionTimeStamp - prevFunctionTimeStamp
        }

        prevFunctionTimeStamp = thisFunctionTimeStamp

    }
    return map;
}


let arr = ["0:start:0", "2:start:4", "2:end:5", "1:start:7", "1:end:10", "0:end:11"]
console.log(getTotalExecutionTime(3, arr))
