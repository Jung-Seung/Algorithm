/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 예외 처리: 배열이 비어있을 경우 길이는 0
    if (nums.length === 0) {
        return 0;
    }

    // 결과를 저장할 인덱스
    let resultIndex = 1;
    // 현재 숫자의 등장 횟수
    let count = 1;

    // 배열을 순회하면서 중복을 최대 2번까지 허용하면서 정렬된 순서로 유지
    for (let i = 1; i < nums.length; i++) {
        // 현재 숫자가 이전 숫자와 같으면 count 증가
        if (nums[i] === nums[i - 1]) {
            count++;
        } else {
            // 현재 숫자가 이전 숫자와 다르면 count 초기화
            count = 1;
        }

        // 중복이 최대 2번까지만 허용하므로 count가 2 이하일 때만 결과 배열에 추가
        if (count <= 2) {
            nums[resultIndex] = nums[i];
            resultIndex++;
        }
    }

    // 결과 배열의 길이가 최종 k
    return resultIndex;
};