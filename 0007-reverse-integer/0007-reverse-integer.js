/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 입력이 0인 경우, 0을 반환
    if (x === 0) return 0;
    // 입력이 양수인 경우
    if (x > 0) {
        // 주어진 수를 문자열로 변환하고 역순으로 정렬하여 다시 정수로 변환
        let result = parseInt(x.toString().split('').reverse().join(''));
        // 결과가 32비트 정수 범위 내에 있는지 확인하고 벗어나면 0을 반환
        return result < Math.pow(2, 31) - 1 ? result : 0;
    } else { // 입력이 음수인 경우
        // 주어진 수를 문자열로 변환하고 부호를 제거한 후 역순으로 정렬하여 다시 정수로 변환
        let result = x.toString().split('');
        result.push('-'); // 부호 추가
        result.shift(); // 기존 부호 제거
        result = result.reverse();
        result = parseInt(result.join(''));
        // 결과가 32비트 정수 범위 내에 있는지 확인하고 벗어나면 0을 반환
        return result > Math.pow(-2, 31) ? result : 0;
    }
}