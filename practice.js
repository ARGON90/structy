const fiveSort = (numbers) => {
    let i = 0;
    let j = numbers.length - 1;

    while (j > i) {

        //if i is a 5
        if (numbers[i] === 5) {

            //and j is NOT a 5, switch them
            if (numbers[j] !== 5) {
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
            }
            j--
        } else {
            i++
        }
        //i is NOT a 5

    }
    return numbers;

}
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]


