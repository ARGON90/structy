function selectionSort(arr) {

    // One by one move boundary of unsorted subarray
    for (let i = 0; i < arr.length; i++) {

        // Find the minimum element in unsorted array
        let min_idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        
        // Swap the found minimum element with the first element
        [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]]
    }
    return arr
}

let arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr))
