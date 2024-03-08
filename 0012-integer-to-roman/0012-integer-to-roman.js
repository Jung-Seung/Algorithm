/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    // 로마 숫자에 대한 값의 맵
    const value = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    
    let result = ''; // 변환된 로마 숫자를 저장할 변수
    
    // 로마 숫자에 대한 값의 맵을 순회하면서 변환 과정 수행
    for (let s of Object.keys(value)) {
        const r = Math.floor(num / value[s]); // 현재 로마 숫자의 갯수 계산
        num -= r * value[s]; // 남은 정수 계산
        result += s.repeat(r); // 현재 로마 숫자를 결과에 추가
    }
    
    return result; // 변환된 로마 숫자 반환
};