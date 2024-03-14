/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = Number.MAX_VALUE; // 가장 가까운 합의 초기값을 설정합니다.
    let number = Number.MAX_VALUE; // 차이의 최솟값을 저장할 변수를 초기화합니다.

    nums.sort((a, b) => a - b); // 배열을 오름차순으로 정렬합니다.

    for (let start = 0; start < nums.length; start++) { // 배열을 순회합니다.
        let left = start + 1; // 왼쪽 포인터를 설정합니다.
        let right = nums.length - 1; // 오른쪽 포인터를 설정합니다.

        while (left < right) { // 포인터가 만날 때까지 반복합니다.
            if (Math.abs(target - (nums[start] + nums[left] + nums[right])) < number) { // 현재 합의 차이가 최솟값보다 작은 경우
                result = nums[start] + nums[left] + nums[right]; // 결과 값을 업데이트합니다.
                number = Math.abs(target - (nums[start] + nums[left] + nums[right])); // 차이의 최솟값을 업데이트합니다.
            }
            if (nums[start] + nums[left] + nums[right] > target) { // 현재 합이 목표보다 큰 경우
                right--; // 오른쪽 포인터를 감소시킵니다.
            } else if (nums[start] + nums[left] + nums[right] === target) { // 합이 목표와 같은 경우
                break; // 반복문을 종료합니다.
            } else { // 현재 합이 목표보다 작은 경우
                left++; // 왼쪽 포인터를 증가시킵니다.
            }
        }
    }
    return result; // 결과 값을 반환합니다.
};