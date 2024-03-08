/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    // 각 자릿수에 대한 로마 숫자 배열
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];
    // 각 자릿수에 대한 로마 숫자를 조합하여 반환
    return ths[Math.floor(num / 1000)] + hrns[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];
};