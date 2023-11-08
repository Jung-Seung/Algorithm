/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // 경로를 슬래시를 기준으로 나눕니다.
    const parts = path.split('/');
    const stack = [];
    
    // 각 부분에 대해 처리합니다.
    for (let part of parts) {
        // 비어있거나 현재 디렉터리를 나타내는 경우 무시합니다.
        if (part === '' || part === '.') {
            continue;
        }
        // 이전 디렉터리를 나타내는 경우 스택에서 pop합니다.
        else if (part === '..') {
            stack.pop();
        }
        // 그 외의 경우 스택에 추가합니다.
        else {
            stack.push(part);
        }
    }
    
    // 간소화된 경로를 구성합니다.
    const result = '/' + stack.join('/');
    return result;
};
