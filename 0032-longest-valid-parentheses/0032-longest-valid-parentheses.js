/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
    const stack = [];
    let maxLen = 0;
    let start = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            if (stack.length === 0) {
                start = i;
            } else {
                stack.pop();
                if (stack.length === 0) {
                    maxLen = Math.max(maxLen, i - start);
                } else {
                    maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
                }
            }
        }
    }

    return maxLen;
};