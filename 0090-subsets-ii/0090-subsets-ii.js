/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 중복된 숫자가 포함된 정수 배열이 주어졌을 때, 중복되지 않은 모든 부분집합을 반환합니다.
var subsetsWithDup = function(nums) {
    // 재귀적으로 중복되지 않은 부분집합을 찾는 함수.
    function findSubset(arr, curr) {
        // 현재 부분집합을 결과에 추가
        res.push([...curr]);

        // 숫자 배열을 순회하며 부분집합 생성
        for (let i = 0; i < arr.length; i++) {
            // 중복된 숫자를 건너뛰기 (처음 나오는 숫자   또는 바로 이전 숫자와 다를 때만 진행)
            if (i === 0 || arr[i] !== arr[i - 1]) {
                // 숫자를 현재 부분집합에 추가
                curr.push(arr[i]);

                // 재귀 호출로 다음 숫자 추가
                findSubset(arr.slice(i + 1), curr);

                // 현재 추가한 숫자를 부분집합에서 제거 (백트래킹)
                curr.pop();
            }
        }
    }

    let res = [];  // 최종 결과를 저장할 배열
    nums.sort((a, b) => a - b);  // 중복을 방지하기 위해 배열 정렬
    findSubset(nums, []);  // 부분집합 생성 시작
    return res;  // 최종 결과 반환
};