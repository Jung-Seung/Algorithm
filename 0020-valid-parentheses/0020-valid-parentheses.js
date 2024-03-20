/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 스택을 초기화합니다.
    const stack = [];
    
    // 문자열을 순회합니다.
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        switch(c) {
            // 여는 괄호가 나오면 해당하는 닫는 괄호를 스택에 추가합니다.
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            // 닫는 괄호가 나오면 스택에서 마지막으로 추가된 여는 괄호와 일치하는지 확인합니다.
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    // 스택이 비어있으면 모든 괄호 쌍이 일치하는 것으로 판단하여 true를 반환합니다.
    // 그렇지 않으면 false를 반환합니다.
    return stack.length === 0;
};