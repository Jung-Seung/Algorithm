/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // 최종 결과를 저장할 배열
    const result = [];
    // 재귀 함수를 호출하여 부분집합 생성
    generateSubsets(nums, 0, [], result);
    // 최종 결과 반환
    return result;
};

// 부분집합을 생성하는 재귀 함수
function generateSubsets(nums, index, currentSubset, result) {
    // 현재 부분집합을 결과에 추가
    result.push([...currentSubset]);
    // 현재 인덱스부터 배열 끝까지 반복
    for (let i = index; i < nums.length; i++) {
        // 현재 숫자를 부분집합에 추가
        currentSubset.push(nums[i]);
        // 재귀 호출: 다음 인덱스부터 부분집합 생성
        generateSubsets(nums, i + 1, currentSubset, result);
        // 백트래킹: 현재 숫자를 제거하여 다른 부분집합 생성
        currentSubset.pop();
    }
}