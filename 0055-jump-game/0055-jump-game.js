/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 배열의 길이가 1 이하이면 항상 가능
    if (nums.length <= 1)
        return true;
    let maximum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        // 현재 위치에 도달했을 때 점프 거리가 0인 경우
        if (maximum <= i && nums[i] === 0)
            return false;
        // 현재 위치에서 최대로 이동할 수 있는 거리 갱신
        if (i + nums[i] > maximum) {
            maximum = i + nums[i];
        }
        // 최대로 이동할 수 있는 거리가 배열의 끝에 도달하면 가능
        if (maximum >= nums.length - 1)
            return true;
    }
    // 마지막까지 끝에 도달하지 못하면 불가능
    return false;
};
