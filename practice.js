const isPrime = (num) => {
  if (num === 2) return true;
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true
}

function sortedPrimes(input_array) {
  var result = [];

  for (let num of input_array) {
    if (isPrime(num)) {
      result.push(num)
    }
  }

  return result.sort((a,b) => a - b);
}

function primeFactors(input_array){
  var result = [];

  for (num of input_array) {
    let thisNumArray = []
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        if (isPrime(i)) {
          if (!thisNumArray.includes(i)) {
            thisNumArray.push(i)
          }
        }
      };
    }
    result.push(thisNumArray)
  }

  return result
}

function main(){
  var input = [6, 8, 9];
  var result = sortedPrimes(input);
  console.log(result);

  var result2 = primeFactors(input);
  console.log(result2);
}

console.log(main())
