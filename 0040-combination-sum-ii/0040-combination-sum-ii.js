/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // 후보 숫자 배열을 정렬
    candidates = candidates.sort((a, b) => a - b);
    // 결과를 저장할 배열과 중복 체크를 위한 해시맵 초기화
    const output = [];
    const hashmap = new Map();

    // 백트래킹 함수
    const backtracking = (curr, remaining, target) => {
        // 현재 남은 후보 숫자 배열의 첫 번째 숫자가 타겟보다 크거나 배열이 비어있으면 중단
        if (target < remaining[0] || !remaining.length) return;
        // 중복 체크를 위한 해시맵 초기화
        const checkedHashmap = new Map();
        // 후보 숫자 배열을 순회하면서 조합을 찾음
        for (let i = 0; i < remaining.length; i++) {
            const number = remaining[i];
            // 이미 체크한 숫자는 스킵
            if (checkedHashmap.has(number)) continue;
            // 타겟보다 큰 숫자는 중단
            if (number > target) return;
            // 현재 상태를 복사하여 새로운 조합을 만듦
            const newRemaining = [...remaining];
            const newCurr = [...curr];
            newCurr.push(number);
            newRemaining.splice(i, 1);
            // 타겟과 일치하면 결과에 추가하고 중복 체크
            if (target - number === 0) {
                const key = newCurr.sort((a, b) => a - b).toString();
                if (hashmap.has(key)) return;
                hashmap.set(key, 1);
                return output.push(newCurr);
            }
            // 중복 체크를 위한 해시맵에 현재 숫자 추가하고 재귀 호출
            checkedHashmap.set(number, 1);
            backtracking(newCurr, newRemaining, target - number);
        }
    }
    // 백트래킹 함수 호출
    backtracking([], candidates, target);
    // 최종 결과 반환
    return output;
};
