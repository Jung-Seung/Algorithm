/**
 * @param {number} n
 * @return {string[]}
 */
// 주어진 숫자 n에 대한 모든 유효한 괄호 조합을 생성합니다.
var generateParenthesis = function(n) {
  // 생성된 모든 유효한 괄호 조합을 저장할 배열입니다.
  const result = [];
  // 유효한 괄호 조합을 생성하는 보조 함수를 호출합니다.
  generateParentheses(result, '', 0, 0, n);
  // 생성된 모든 유효한 괄호 조합을 반환합니다.
  return result;
};

// 유효한 괄호 조합을 생성하는 보조 함수입니다.
const generateParentheses = (result, current, open, close, n) => {
  // 괄호 쌍의 개수가 2*n이 되면 현재 조합을 결과 배열에 추가하고 종료합니다.
  if (current.length === 2 * n) {
    result.push(current);
    return;
  }
  // 여는 괄호를 추가할 수 있는 경우 추가합니다.
  if (open < n) {
    generateParentheses(result, current + '(', open + 1, close, n);
  }
  // 닫힌 괄호를 추가할 수 있는 경우 추가합니다.
  if (close < open) {
    generateParentheses(result, current + ')', open, close + 1, n);
  }
};
