/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 /*
    1. 배열을 먼저 정렬하여 중복된 숫자가 인접하도록 합니다.
    2. backtrack 함수는 현재 순열과 남은 숫자의 배열을 매개변수로 사용합니다.
    3. 만약 remaining이 빈 배열이면, 현재 순열을 결과에 추가합니다.
    4. 반복문을 통해 남은 숫자 배열을 순회하면서 중복된 수를 건너뜁니다.
    5. 현재 숫자를 추가하고, 재귀적으로 순열을 찾습니다. 재귀 호출이 끝나면 현재 숫자를 제거합니다.
 */
var permuteUnique = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    const backtrack = (current, remaining) => {
        if (remaining.length === 0) {
            result.push(current.slice());
            return;
        }
        for (let i = 0; i < remaining.length; i++) {
            if (i > 0 && remaining[i] === remaining[i - 1]) {
                continue;
            }
            current.push(remaining[i]);
            backtrack(current, remaining.slice(0, i).concat(remaining.slice(i + 1)));
            current.pop();
        }
    };
    backtrack([], nums);
    return result;
};