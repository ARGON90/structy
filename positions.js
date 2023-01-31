const getChoices = (s) => {
  if (!s.length) return '';
  if (!s.includes('(')) return s[0];

  let res = '';
  let pushChar = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      pushChar = false;
    }
    if (pushChar) {
      res += s[i]
    }
    if (s[i] === '(') {
      pushChar = true
    }
  }

  return res;

}

console.log(getChoices('get(choi)ces'))
