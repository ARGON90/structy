function bubbleSort(arr) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;

        for (let j = 0; j < arr.length; j++) {
            // If the current value is greater than its neighbor to the right
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true;
            }
        }

        // If you get to the end of the array and no swaps have occurred, return
        if (swapped == false)
            break;

        // Otherwise, repeat from the beginning
    }
    return arr
}
let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
console.log(bubbleSort(arr))
