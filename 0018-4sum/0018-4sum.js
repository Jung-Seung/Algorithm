/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b); // 배열을 오름차순으로 정렬합니다.
  const quadruplets = []; // 결과를 저장할 배열입니다.
  const n = nums.length; // 배열의 길이입니다.
  
  for (let i = 0; i < n - 3; i++) { // 첫 번째 숫자를 선택합니다.
    if (i > 0 && nums[i] === nums[i - 1]) { // 중복된 숫자는 건너뜁니다.
      continue;
    }
    
    for (let j = i + 1; j < n - 2; j++) { // 두 번째 숫자를 선택합니다.
      if (j > i + 1 && nums[j] === nums[j - 1]) { // 중복된 숫자는 건너뜁니다.
        continue;
      }
      
      let left = j + 1; // 왼쪽 포인터를 설정합니다.
      let right = n - 1; // 오른쪽 포인터를 설정합니다.
      
      while (left < right) { // 왼쪽 포인터가 오른쪽 포인터보다 작은 동안 반복합니다.
        const sum = BigInt(nums[i]) + BigInt(nums[j]) + BigInt(nums[left]) + BigInt(nums[right]); // 네 숫자의 합을 계산합니다.
        
        if (sum < target) { // 합이 목표값보다 작은 경우
          left++; // 왼쪽 포인터를 오른쪽으로 이동합니다.
        } else if (sum > target) { // 합이 목표값보다 큰 경우
          right--; // 오른쪽 포인터를 왼쪽으로 이동합니다.
        } else { // 합이 목표값과 같은 경우
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]]); // 네 숫자의 조합을 결과 배열에 추가합니다.
          
          // 중복된 숫자를 건너뛰기 위해 포인터를 이동합니다.
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++; // 왼쪽 포인터를 다음 값으로 이동합니다.
          right--; // 오른쪽 포인터를 다음 값으로 이동합니다.
        }
      }
    }
  }
  
  return quadruplets; // 네 개의 숫자 조합을 반환합니다.
};