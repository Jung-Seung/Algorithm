/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    // 결과 배열을 첫 번째 그레이 코드인 0으로 초기화합니다.
    let result = [0];

    // 각 비트 위치를 반복합니다.
    for (let i = 0; i < n; i++) {
        // 현재 반복 이전의 결과 배열의 크기를 계산합니다.
        const size = result.length;

        // i번째 비트를 토글할 마스크를 계산합니다.
        const mask = 1 << i;

        // 결과 배열을 역방향으로 반복하면서 새로운 그레이 코드를 추가합니다.
        for (let j = size - 1; j >= 0; j--) {
            result.push(result[j] | mask);
        }
    }

    return result;
};