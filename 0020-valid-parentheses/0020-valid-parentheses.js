/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {   
    // 괄호를 저장할 스택을 초기화합니다.
    const stack = [];
    
    // 문자열을 순회하면서 괄호를 처리합니다.
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': 
                stack.push(')');
                break;
            case '[': 
                stack.push(']');
                break;
            case '{': 
                stack.push('}');
                break;
            default:
                // 스택에서 팝한 값이 현재 처리중인 값과 다를 경우 유효하지 않은 괄호 문자열입니다.
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    // 스택의 길이가 0이면 유효한 괄호 문자열입니다.
    return stack.length === 0;
};
