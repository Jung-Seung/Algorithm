/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const m = num1.length, n = num2.length;
    const pos = new Array(m + n).fill(0);
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1.charCodeAt(i) - '0'.charCodeAt(0)) * (num2.charCodeAt(j) - '0'.charCodeAt(0));
            const p1 = i + j, p2 = i + j + 1;
            const sum = mul + pos[p2];
            
            pos[p1] += Math.floor(sum / 10);
            pos[p2] = sum % 10;
        }
    }
    
    let result = "";
    for (let p of pos) {
        if (!(result.length === 0 && p === 0)) {
            result += p;
        }
    }
    return result.length === 0 ? "0" : result;
};

/*
각 문자를 ASCII 값으로 변환하여 연산을 수행합니다.
두 문자열의 각 자릿수를 거꾸로 반복하면서 각 자릿수에서의 곱과 현재 자릿수의 위치를 계산합니다.
각 자릿수의 곱과 현재 위치를 이용하여 각 자릿수의 합을 계산합니다.
이를 통해 자릿수를 갱신하고 올림수를 계산하여 위치를 갱신합니다.
최종 곱의 결과를 문자열로 반환합니다.
*/