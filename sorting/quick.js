function quick_Sort(origArray) {

    // Check if the input is length 1 or less
    // If so, it's already sorted: return
	if (origArray.length <= 1) {
		return origArray;
	} else {

		let left = [];
		let right = [];
		let newArray = [];
        //pick a pivot
		let pivot = origArray.pop();
		let length = origArray.length;

        //items smaller than pivot go on left
        //items greater than pivot go on right
		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

        //call recursively
		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);
