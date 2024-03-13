/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []; // 결과 배열
    nums.sort((a, b) => a - b); // 배열을 오름차순으로 정렬합니다.
    
    for (let i = 0; i < nums.length - 2; i++) { // 배열을 순회합니다.
        if (i === 0 || nums[i] !== nums[i - 1]) { // 중복된 숫자를 건너뜁니다.
            let lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i]; // 두 개의 포인터 및 목표 합을 설정합니다.
            while (lo < hi) { // 포인터가 만날 때까지 반복합니다.
                if (nums[lo] + nums[hi] === sum) { // 합이 목표와 같은 경우
                    res.push([nums[i], nums[lo], nums[hi]]); // 결과 배열에 삼중항을 추가합니다.
                    while (lo < hi && nums[lo] === nums[lo + 1]) lo++; // 중복된 숫자를 건너뜁니다.
                    while (lo < hi && nums[hi] === nums[hi - 1]) hi--; // 중복된 숫자를 건너뜁니다.
                    lo++; // 다음 숫자로 이동합니다.
                    hi--; // 다음 숫자로 이동합니다.
                } else if (nums[lo] + nums[hi] < sum) { // 합이 목표보다 작은 경우
                    lo++; // 작은 값을 증가시킵니다.
                } else { // 합이 목표보다 큰 경우
                    hi--; // 큰 값을 감소시킵니다.
                }
            }
        }
    }
    
    return res; // 결과 배열을 반환합니다.
};