function plusOne(digits) {
    let result = [];
    let string = digits.toString().replace(/,/g, '')
console.log(string+1)
    // const final = (1).split('').join(',').split(',');
    // for (let a in final) {
    //     result.push(parseFloat(final[a]))
    // }
    return result;
};
const res = plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
