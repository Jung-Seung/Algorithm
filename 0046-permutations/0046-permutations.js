/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 /*
    1. backtrack 함수를 정의하여 현재 순열과 남은 요소를 추적합니다.
    2. 재귀적으로 모든 가능한 순열을 생성합니다.
    3. 기저 사례에 도달하면 현재 순열을 결과에 추가합니다.
    4. 모든 요소에 대해 이 과정을 반복하여 모든 가능한 순열을 찾습니다.
 */
var permute = function(nums) {
     const result = [];
    
    const backtrack = (current, remaining) => {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            const newCurrent = [...current, remaining[i]];
            const newRemaining = remaining.filter((_, index) => index !== i);
            backtrack(newCurrent, newRemaining);
        }
    };
    
    backtrack([], nums);
    return result;
};