/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // 결과 변수 및 초기값 설정
    let result = Number.MAX_VALUE;
    let number = Number.MAX_VALUE;
    // 배열을 오름차순으로 정렬
    nums.sort((a, b) => a - b);
    // 첫 번째 숫자를 기준으로 루프
    for (let start = 0; start < nums.length; start++) {
        // 두 번째와 세 번째 숫자의 인덱스 설정
        let left = start + 1;
        let right = nums.length - 1;
        // 투 포인터 알고리즘을 사용하여 가장 가까운 합을 찾음
        while (left < right) {
            // 현재 조합의 합과 타겟과의 차이의 절댓값 계산
            let currentDiff = Math.abs(target - (nums[start] + nums[left] + nums[right]));
            // 현재 차이가 이전에 저장한 차이보다 작으면 결과 및 차이 갱신
            if (currentDiff < number) {
                result = nums[start] + nums[left] + nums[right];
                number = currentDiff;
            }
            // 합이 타겟보다 크면 세 번째 숫자를 감소
            if (nums[start] + nums[left] + nums[right] > target) {
                right--;
            }
            // 합이 타겟과 같으면 루프 종료
            else if (nums[start] + nums[left] + nums[right] === target) {
                break;
            }
            // 합이 타겟보다 작으면 두 번째 숫자를 증가
            else {
                left++;
            }
        }
    }
    return result;
};
