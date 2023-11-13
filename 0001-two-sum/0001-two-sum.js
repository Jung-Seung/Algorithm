/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 숫자와 해당 숫자의 인덱스를 저장하는 Map을 생성합니다.
    const map = new Map();
    // 배열의 각 요소를 반복합니다.
    for (let i = 0; i < nums.length; i++) {
        // 현재 요소에 대한 보수(complement)를 계산합니다.
        const complement = target - nums[i];
        // Map에 보수가 이미 존재하는지 확인합니다.
        if (map.has(complement)) {
            // 보수가 존재한다면, 현재 숫자와 보수의 인덱스를 반환합니다.
            return [map.get(complement), i];
        }
        // 보수가 존재하지 않는다면, 현재 숫자와 해당 숫자의 인덱스를 Map에 저장합니다.
        map.set(nums[i], i);
    }
    // 여기까지 왔다면, 조건을 만족하는 숫자 쌍이 없으므로 빈 배열을 반환합니다.
    return [];
};
