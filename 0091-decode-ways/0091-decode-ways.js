/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // 메모이제이션을 위한 배열, -1로 초기화
    const memo = new Array(s.length).fill(-1);
    //주어진 인덱스부터 시작하는 숫자 문자열을 해독하여 가능한 방법의 수를 재귀적으로 계산하는 함수.
    const helper = (index) => {
        // 문자열의 끝에 도달하면 1을 반환
        if (index === s.length) {
            return 1;
        }
        // 현재 숫자가 0이면 해독 불가능
        if (s[index] === '0') {
            return 0;
        }
        // 이미 계산한 값이 있다면 반환
        if (memo[index] !== -1) {
            return memo[index];
        }
        // 현재 숫자부터 시작하는 경우의 해독 방법 수
        let ways = helper(index + 1);
        // 두 숫자를 합쳐서 10에서 26 사이의 수가 되면 두 번째 경우의 해독 방법도 고려
        if (index < s.length - 1 && parseInt(s.substring(index, index + 2)) <= 26) {
            ways += helper(index + 2);
        }
        // 메모이제이션에 저장하고 결과 반환
        memo[index] = ways;
        return ways;
    };
    // 처음부터 시작하여 전체 문자열의 해독 방법 수를 계산
    return helper(0);
};