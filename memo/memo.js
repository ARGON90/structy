//FIB
const fib = (n, memo= {}) => {

    //create memo
    if (n in memo) return memo[n]

    //base case
    if (n === 1) return 1
    if (n === 0) return 0

    //recursive step
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

    //final return
    return memo[n]

}

//EXACT CHANGE POSSIBLE?

const sumPossible = (amount, numbers, memo = {}) => {


    if (amount < 0) return false
    if (amount === 0) return true
    if (amount in memo) return memo[amount]

    console.log('pre', memo)
    for (let num of numbers) {

        if (sumPossible(amount - num, numbers, memo) === true) {
            memo[amount] = true
            return true
        }
    }

    memo[amount] = false
    return false

}

console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4
