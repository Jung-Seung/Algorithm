/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // 최종 결과를 저장할 배열
    const result = [];
    // 백트래킹 함수 호출하여 조합 생성
    backtrack(n, k, 1, [], result);
    // 최종 결과 반환
    return result;
};

// 백트래킹 함수: 조합 생성
function backtrack(n, k, start, combination, result) {
    // k개의 숫자를 선택한 경우, 현재 조합을 결과에 추가
    if (combination.length === k) {
        result.push([...combination]);
        return;
    }
    // 현재 위치부터 n까지 반복
    for (let i = start; i <= n; i++) {
        // 현재 숫자를 조합에 추가
        combination.push(i);
        // 재귀 호출: 다음 숫자를 선택하도록 함
        backtrack(n, k, i + 1, combination, result);
        // 백트래킹: 현재 숫자를 제거하여 다른 조합을 시도
        combination.pop();
    }
}