/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // 주어진 배열을 정렬
  nums.sort((a, b) => a - b);
  // 결과를 저장할 배열
  const quadruplets = [];
  // 배열의 길이
  const n = nums.length;
  // 첫 번째 숫자 선택
  for (let i = 0; i < n - 3; i++) {
    // 중복된 숫자는 건너뛰기
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 두 번째 숫자 선택
    for (let j = i + 1; j < n - 2; j++) {
      // 중복된 숫자는 건너뛰기
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      // 세 번째와 네 번째 숫자의 포인터 설정
      let left = j + 1;
      let right = n - 1;
      // 투 포인터를 사용하여 합 계산
      while (left < right) {
        // 네 숫자의 합 계산 (BigInt를 사용하여 오버플로우 방지)
        const sum = BigInt(nums[i]) + BigInt(nums[j]) + BigInt(nums[left]) + BigInt(nums[right]);
        // 합이 목표값보다 작은 경우
        if (sum < target) {
          left++;
        }
        // 합이 목표값보다 큰 경우
        else if (sum > target) {
          right--;
        }
        // 합이 목표값과 같은 경우
        else {
          // 결과에 추가
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
          // 중복된 숫자는 건너뛰기
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          // 다음 조합을 위해 포인터 이동
          left++;
          right--;
        }
      }
    }
  }
  // 최종 결과 반환
  return quadruplets;
};
