/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    // 생성된 모든 조합을 저장할 배열입니다.
    const combinations = [];
    
    // DFS를 이용하여 유효한 괄호 조합을 생성합니다.
    const dfs = (left, right, combination) => {
        // 괄호 쌍이 모두 사용된 경우, 현재 조합을 배열에 추가하고 함수를 종료합니다.
        if (left === n && right === n) {
            combinations.push(combination);
            return;
        }
        
        // 왼쪽 괄호가 오른쪽 괄호보다 많은 경우
        if (left > right) {
            // 왼쪽 괄호를 추가할 수 있는 경우 추가합니다.
            left < n && dfs(left + 1, right, combination + '(');
            // 오른쪽 괄호를 추가할 수 있는 경우 추가합니다.
            right < n && dfs(left, right + 1, combination + ')');
        }
        // 왼쪽 괄호와 오른쪽 괄호의 수가 같은 경우
        else if (left === right) {
            // 왼쪽 괄호를 추가할 수 있는 경우 추가합니다.
            left < n && dfs(left + 1, right, combination + '(');
        }
    }
    
    // DFS를 시작합니다. 초기값은 0으로 설정합니다.
    dfs(0, 0, '');
    // 생성된 모든 유효한 조합을 반환합니다.
    return combinations;
};