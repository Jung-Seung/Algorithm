/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const MinNum = -2147483648; //-2^31 값
    const MaxNum = 2147483647;  //2^31-1 값
    
    if(x < MinNum || x > MaxNum) {
        return false;
    }
    
    const reverse =  x.toString().split("").reverse().join("");
    return x === Number(reverse);
};
