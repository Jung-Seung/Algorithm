/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";

    let result = "1";
    for (let i = 2; i <= n; i++) {
        result = say(result);
    }

    return result;
};

var say = function(str){
    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += count + str[i];
            count = 1;
        }
    }

    return result;
};