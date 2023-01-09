const uncompress = (s) => {
    let str = ''
    let num = '';
    for (let char of s) {

        //if it's a number, add it to number str
        if (Number(char)) {
            console.log(num, 'before')
            num += char;
            console.log(num, 'after')
        } else {

            //else, concat the character onto str
            num = Number(num)
            while (num > 0) {
                str += char
                num--
            }


        }
    }
    return str;

}


console.log(uncompress("2c3a1t"));
