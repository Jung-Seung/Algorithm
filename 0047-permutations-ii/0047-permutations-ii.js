/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 중복된 숫자가 포함된 순열을 생성하는 함수
var permuteUnique = function(nums) {
    const res = [];  // 결과를 저장할 배열
    const countMap = {};  // 각 숫자의 등장 횟수를 기록할 객체
    // 숫자 배열을 순회하며 각 숫자의 등장 횟수를 countMap에 기록
    for (let i = 0; i < nums.length; i++) {
        const curVal = nums[i];
        if (!countMap[curVal]) {
            countMap[curVal] = 1;
        } else {
            countMap[curVal] += 1;
        }
    } 
    // 깊이 우선 탐색을 통해 중복된 숫자를 포함한 순열 생성
    dfs(nums, [], countMap, res);
    return res;
};

// 중복된 숫자가 포함된 순열을 생성하는 보조 함수
function dfs(nums, path, countMap, res) {
    // 순열이 완성되면 결과 배열에 추가
    if (path.length === nums.length) {
        return res.push([...path]);
    }
    // 숫자의 등장 횟수를 고려하여 순회하며 순열 생성
    for (const num in countMap) {
        const numCount = countMap[num];
        // 등장 횟수가 0인 경우 건너뛰기
        if (numCount === 0) continue;
        // 숫자를 순열에 추가하고 등장 횟수 업데이트
        path.push(Number(num));
        countMap[num] -= 1;
        // 다음 단계의 순열 생성을 위해 재귀 호출
        dfs(nums, path, countMap, res);
        // 현재 숫자를 순열에서 제거하고 등장 횟수 복원
        path.pop();
        countMap[num] += 1;
    }
}
