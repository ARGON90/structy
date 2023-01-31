const parentheticalPossibilities = (s) => {
  if (s.length === 0) return [''];

  const allPossibilities = [];

  const {choices, remainder} = getChoices(s);
  console.log('first choices, string:', s, 'choices:', choices, remainder)
  //a single choice is a character
  for (let choice of choices) {
    const remainderPossibilities = parentheticalPossibilities(remainder);
    for (let substring of remainderPossibilities) {
      allPossibilities.push(choice + substring)
    }
  };
  console.log('return stmt', allPossibilities)
  return allPossibilities;
};

//return one character from parenthesis, and return tail of sentence
//format it as an object
const getChoices = (s) => {
  if (s[0] === '(') {
    let end = s.indexOf(')') //first index of this character's occurence
    const choices = s.slice(1, end);
    const remainder = s.slice(end + 1);
    return {
      choices,
      remainder
    };
  } else {
    return {
    choices: s[0],
    remainder: s.slice(1)
    }
  }
}


console.log(parentheticalPossibilities("(qr)ab(stu)c")); // ->
// [ 'qabsc', 'qabtc', 'qabuc', 'rabsc', 'rabtc', 'rabuc' ]
