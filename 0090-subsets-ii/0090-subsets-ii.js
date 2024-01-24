/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    // 결과를 저장할 배열
    const result = [];
    
    // 중복된 부분집합을 방지하기 위해 정렬
    nums.sort((a, b) => a - b);
    
    // 부분집합을 생성하는 재귀 함수
    const generateSubsets = (index, currentSubset) => {
        // 현재 부분집합을 결과에 추가
        result.push([...currentSubset]);

        // 중복을 방지하기 위해 이전에 선택한 숫자를 기록
        let prevNum = null;

        // 숫자 배열을 순회하며 부분집합 생성
        for (let i = index; i < nums.length; i++) {
            // 중복된 숫자를 건너뛰기
            if (nums[i] === prevNum) continue;

            // 숫자를 현재 부분집합에 추가
            currentSubset.push(nums[i]);

            // 재귀 호출로 다음 숫자 추가
            generateSubsets(i + 1, currentSubset);

            // 이전에 추가한 숫자 기록 업데이트
            prevNum = nums[i];

            // 현재 추가한 숫자를 부분집합에서 제거 (백트래킹)
            currentSubset.pop();
        }
    };

    // 부분집합 생성 시작
    generateSubsets(0, []);

    // 최종 결과 반환
    return result;
};