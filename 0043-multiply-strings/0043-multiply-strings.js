/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    // 둘 중 하나라도 '0'이면 곱은 '0'
    if (num1 === '0' || num2 === '0') return '0';
    const m = num1.length, n = num2.length;
    // 결과를 담을 배열 초기화
    const res = new Array(m + n).fill(0);
    // 뒤에서부터 숫자를 곱하고 더해나감
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const p1 = i + j, p2 = i + j + 1;
            // 현재 자리의 값에 현재 자리의 값을 더하고 갱신
            let sum = res[p2] + Number(num1[i]) * Number(num2[j]);
            res[p2] = sum % 10;
            res[p1] += Math.floor(sum / 10);
        }
    }
    // 결과 배열의 첫 자리가 0이면 제거
    if (res[0] === 0) res.shift();
    // 결과 배열을 문자열로 변환하여 반환
    return res.join('');
};
