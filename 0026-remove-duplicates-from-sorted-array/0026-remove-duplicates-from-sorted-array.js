/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 포인터 i를 사용하여 중복을 제거하며 배열을 수정
  let i = 0;
  // 배열을 순회하면서 중복된 요소를 제거
  for (let j = 1; j < nums.length; j++) {
    // 현재 요소와 이전 요소가 다를 경우
    if (nums[i] !== nums[j]) {
      // 포인터를 증가시키고 현재 요소를 이전 요소의 다음으로 옮김
      i++;
      nums[i] = nums[j];
    }
  }
  // 중복이 제거된 배열의 길이를 반환
  return i + 1;
};
