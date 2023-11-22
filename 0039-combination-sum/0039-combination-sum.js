/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // 현재 후보 숫자 배열의 인덱스, 임시 데이터 구조, 결과를 저장할 배열 초기화
    let index = 0;
    let tempDataStruct = [];
    let result = [];

    // 백트레킹 함수
    function backtracking(index, target, tempDataStruct) {
        // 타겟이 0이면 현재까지의 조합을 결과에 추가하고 리턴
        if(target === 0) {
            result.push([...tempDataStruct]);
            return;
        }
        // 타겟이 음수면 더 이상 진행하지 않음
        if(target < 0) return;
        // 후보 숫자 배열을 순회하면서 조합을 찾음
        for(let i=index; i<candidates.length; i++) {
            // 현재 숫자를 임시 데이터에 추가
            tempDataStruct.push(candidates[i]);
            // 재귀 호출로 다음 숫자를 찾음
            backtracking(i, target - candidates[i], tempDataStruct);
            // 백트래킹: 현재 숫자를 제거하여 다른 조합을 찾음
            tempDataStruct.pop();
        }
    }
    // 백트래킹 함수 호출
    backtracking(index, target, tempDataStruct);
    // 최종 결과 반환
    return result;
};
