/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 첫 번째 요소부터 시작하여 중복된 요소를 건너뛰면서 새로운 배열을 만듭니다.
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    // 현재 요소와 이전 요소가 다른 경우에만 새로운 배열에 값을 저장합니다.
    if (nums[i] !== nums[j]) {
      // 중복된 요소가 아닌 경우, 이전 요소의 다음 인덱스에 현재 요소 값을 저장합니다.
      i++;
      nums[i] = nums[j];
    }
  }
  // 중복을 제거한 배열의 길이는 중복되지 않는 요소의 개수입니다.
  // 이때, 중복되지 않는 요소의 개수는 i의 값에 1을 더한 값입니다.
  return i + 1;
}