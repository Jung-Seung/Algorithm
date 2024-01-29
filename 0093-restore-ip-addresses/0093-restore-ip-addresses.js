/**
 * @param {string} s
 * @return {string[]}
 */
// 주어진 문자열 s에 대해 가능한 모든 유효한 IP 주소를 반환합니다.
var restoreIpAddresses = function(s) {
    const result = [];
    
    // 재귀적으로 IP 주소를 구성하는 함수
    const backtrack = (current, segments, index) => {
        // 모든 세그먼트를 사용하고 문자열을 모두 처리했을 때
        if (segments === 0 && index === s.length) {
            result.push(current);
            return;
        }

        // 남은 문자열이 없거나 세그먼트를 모두 사용했는데 문자열이 남아있을 때
        if (index >= s.length || segments === 0) {
            return;
        }

        // 가능한 세 자리 숫자로 세그먼트 구성
        for (let i = 1; i <= 3; i++) {
            const segment = s.slice(index, index + i);

            // 세 자리 숫자의 범위가 맞고, 0으로 시작하는 경우가 아닐 때
            if (parseInt(segment) <= 255 && (segment.length === 1 || segment[0] !== '0')) {
                const next = segments === 1 ? current + segment : current + segment + '.';
                backtrack(next, segments - 1, index + i);
            }
        }
    };

    backtrack('', 4, 0);
    return result;
};