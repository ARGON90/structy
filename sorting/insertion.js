function insertionSort(arr) {

    //and has nothing to compare it self to, so we start at 1
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        //start a while loop with the item behind the current
        let pointer = i - 1;

        //if value of(arr[pointer]) is GREATER than the current value (it shouldn't be)
        //and pointer hasn't hit the beginning
        while (arr[pointer] > current && pointer >= 0) {
            //rewrite pointer + 1 val with pointer val
            arr[pointer + 1] = arr[pointer];
            //move pointer to left until it's GREATER than the current num
            pointer--;
        }
        //stick the current number of the array you're checking into the index where it is the larger number
        arr[pointer + 1] = current;
    }
    return arr
}
let arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
console.log(insertionSort(arr));
// [1, 2, 4, 6, 8, 3, 5, 7, 9] start - 3 is saved as current
// [1, 2, 4, 6, 8, 8, 5, 7, 9] pointer (8) is GREATER than current (3)? [pointer + 1] value set to [pointer] value (8 -> 3), decrement pointer
// [1, 2, 4, 6, 6, 8, 5, 7, 9]
// [1, 2, 4, 4, 6, 8, 5, 7, 9] pointer is is SMALLER than current, [pointer] + 1 value set to CURRENT
// [1, 2, 3, 4, 6, 8, 8, 7, 9] end
