/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var s = x.toString();
    var t = s.split("").reverse().join("");
    return s === t;
};