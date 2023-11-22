/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // 기본 케이스: n이 1인 경우 '1' 반환
    if (n === 1) return '1';
    
    // 이전 수열을 생성하여 정규표현식을 이용해 그룹화하고, 각 그룹의 길이와 첫 번째 숫자로 변환
    return countAndSay(n-1)
        .match(/1+|2+|3+/g)
        .reduce((acc, nums) => acc += `${nums.length}${nums[0]}`, '');
};
