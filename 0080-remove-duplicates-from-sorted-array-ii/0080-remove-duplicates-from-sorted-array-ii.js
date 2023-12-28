/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 예외 처리: 배열의 길이가 2 이하인 경우 이미 중복 허용 가능
    if(nums.length <= 2) {
        return nums.length;
    }

    // 초기화: 배열의 첫 두 숫자는 항상 중복 허용
    let k = 2;

    // 배열을 순회하면서 중복을 최대 2번까지만 허용하면서 정렬된 순서로 유지
    for(let i = 2; i < nums.length; i++){
        // 현재 인덱스의 숫자가 (k-1)번째와 (k-2)번째 숫자와 다를 때만 카운트
        if(nums[i] !== nums[k - 2] || nums[i] !== nums[k - 1]){
            nums[k] = nums[i];
            k++;
        // 현재 인덱스의 숫자가 (k-1)번째와 (k-2)번째 숫자와 같으면 스킵
        }
    }

    // 수정된 배열의 길이 k 반환
    return k;
};
