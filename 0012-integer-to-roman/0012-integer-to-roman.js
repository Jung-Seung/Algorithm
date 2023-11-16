/**
 * @param {number} num
 * @return {string}
 */
// 정수를 로마 숫자로 변환하는 함수
var intToRoman = function(num) {
    // 각 자릿수별 로마 숫자를 저장한 배열들 정의
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];

    // 각 자릿수에 해당하는 로마 숫자를 결합하여 결과 반환
    return ths[Math.floor(num / 1000)] +  // 천의 자리
           hrns[Math.floor((num % 1000) / 100)] +  // 백의 자리
           tens[Math.floor((num % 100) / 10)] +  // 십의 자리
           ones[num % 10];  // 일의 자리
};
