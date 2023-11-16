/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const results = [];

    // 배열의 길이가 3보다 작으면 합이 0이 되는 조합이 존재하지 않으므로 빈 배열 반환
    if (nums.length < 3) return results;

    // 배열을 오름차순으로 정렬
    nums.sort((a, b) => a - b);
    let target = 0;

    // 첫 번째 숫자를 기준으로 루프
    for (let i = 0; i < nums.length - 2; i++) {
        // 현재 숫자가 타겟보다 크면 그 뒤의 숫자들도 모두 크므로 루프 중단
        if (nums[i] > target) break;

        // 중복된 숫자는 결과에 중복되지 않도록 스킵
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // 두 번째와 세 번째 숫자의 인덱스를 설정
        let j = i + 1;
        let k = nums.length - 1;

        // 투 포인터 알고리즘을 사용하여 합이 0이 되는 조합을 찾음
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                // 합이 0이 되는 조합을 찾았을 때, 결과 배열에 추가
                results.push([nums[i], nums[j], nums[k]]);
                // 중복된 숫자는 스킵
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < target) {
                // 합이 타겟보다 작으면 두 번째 숫자를 증가
                j++;
            } else {
                // 합이 타겟보다 크면 세 번째 숫자를 감소
                k--;
            }
        }
    }
    return results;
}
