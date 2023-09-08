/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let sign = "+";
    const numberArr = [];
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(-2, 31);
    let n = 0;
    const noneSpace = s.trimStart().split('');
    if(noneSpace[0] === '+' || noneSpace[0] === '-'){
        sign = noneSpace[0];
        noneSpace.shift();
    }
    for(let str of noneSpace){
        if(isNaN(Number(str)) || str === " "){
            break;
        } else {
            numberArr.push(str);
        }
    }
    if(numberArr.length === 0){
        return n;
    }
    if(sign === "+"){
        n = Number(numberArr.join(''));
        if(n >= max){
            n = max;
        }
    }
    if(sign === '-'){
        n = Number(numberArr.join('')) * -1;
        if(n <= min){
            n = min;
        }
    }
    return n;
};