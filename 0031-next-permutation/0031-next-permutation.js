/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length;
    let k, l;
    // 1. 순열의 끝에서부터 앞으로 가면서 교환할 위치 찾기
    for (k = n - 2; k >= 0; k--) {
        if (nums[k] < nums[k + 1]) {
            break;
        }
    }
    // 2. 교환할 위치가 없으면 순열을 뒤집어서 최솟값으로 만듦
    if (k < 0) {
        nums.reverse();
    } else {
        // 3. 찾은 교환할 위치에서부터 끝까지 중에서 큰 값 찾기
        for (l = n - 1; l > k; l--) {
            if (nums[l] > nums[k]) {
                break;
            }
        }   
        // 4. 교환할 위치와 큰 값을 교환
        [nums[k], nums[l]] = [nums[l], nums[k]];
        // 5. 교환한 위치 다음부터 끝까지를 뒤집어서 오름차순으로 만듦
        nums.splice(k + 1, n - k - 1, ...nums.slice(k + 1).reverse());
    }
};
