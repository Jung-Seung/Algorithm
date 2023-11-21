/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(S) {
    // 스택을 사용하여 유효한 괄호의 시작 인덱스를 저장
    let stack = [-1];
    // 결과 변수 초기화
    let ans = 0;
    // 문자열을 순회하면서 괄호 확인
    for (let i = 0; i < S.length; i++) {
        // 여는 괄호일 경우 인덱스 스택에 추가
        if (S[i] === '(') {
            stack.push(i);
        } else {
            // 스택이 비어있으면 현재 괄호의 인덱스를 스택에 추가
            if (stack.length === 1) {
                stack[0] = i;
            } else {
                // 스택에서 여는 괄호의 인덱스를 제거하면서 길이 갱신
                stack.pop();
                ans = Math.max(ans, i - stack[stack.length - 1]);
            }
        }
    }
    // 최종 결과 반환
    return ans;
};
