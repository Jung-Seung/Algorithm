/**
 * @param {number} n
 * @return {string[]}
 */
// 숫자 n에 대한 올바른 괄호 조합을 생성하는 함수
var generateParenthesis = function(n) {
  // 결과를 저장할 배열
  const result = [];
  // 괄호를 생성하는 재귀 함수
  generateParentheses(result, '', 0, 0, n);
  // 최종 결과 반환
  return result;
};

// 실제로 괄호를 생성하는 재귀 함수
const generateParentheses = (result, current, open, close, n) => {
  // 현재 괄호 문자열이 올바른 길이인 경우 결과에 추가하고 종료
  if (current.length === 2 * n) {
    result.push(current);
    return;
  }
  // 열린 괄호를 추가할 수 있는 경우 재귀 호출
  if (open < n) {
    generateParentheses(result, current + '(', open + 1, close, n);
  }
  // 닫힌 괄호를 추가할 수 있는 경우 재귀 호출
  if (close < open) {
    generateParentheses(result, current + ')', open, close + 1, n);
  }
};
