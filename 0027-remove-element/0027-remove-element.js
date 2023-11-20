/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    // 특정 값과 일치하지 않는 요소를 저장할 변수 count 초기화
    let count = 0;
    // 배열의 모든 요소를 순회
    for (let i = 0; i < nums.length; i++) {
        // 현재 요소가 특정 값과 일치하지 않을 경우
        if (nums[i] !== val) {
            // count 위치에 현재 요소를 덮어씌우고 count를 증가
            nums[count++] = nums[i];
        }
    }
    // 특정 값이 제거된 배열의 길이 반환
    return count;
}
