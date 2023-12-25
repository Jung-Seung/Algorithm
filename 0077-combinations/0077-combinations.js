/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // 결과를 저장할 배열
    const result = [];
    // 재귀 함수를 정의하여 조합을 생성
    
    function generateCombinations(start, currentCombination) {
        // k개의 원소를 선택한 경우, 결과에 추가
        if (currentCombination.length === k) {
            result.push([...currentCombination]);
            return;
        }
        // 현재 위치부터 n까지 반복
        for (let i = start; i <= n; i++) {
            // 현재 원소를 추가하고 재귀 호출
            currentCombination.push(i);
            generateCombinations(i + 1, currentCombination);
            // 백트래킹: 현재 원소를 제거하여 다른 조합을 시도
            currentCombination.pop();
        }
    }
    // 재귀 함수 호출 시작
    generateCombinations(1, []);
    // 최종 결과 반환
    return result;
};