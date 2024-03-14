/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return []; // 입력이 없는 경우 빈 배열을 반환합니다.

    const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]; // 각 숫자에 해당하는 문자들의 매핑입니다.
    const output = []; // 결과를 저장할 배열입니다.
    backtrack("", digits, phone_map, output); // 백트래킹 함수를 호출하여 가능한 조합을 찾습니다.
    return output; // 가능한 모든 조합을 반환합니다.

    // 백트래킹을 사용하여 숫자 문자열에 대한 가능한 조합을 찾는 내부 함수입니다.
    function backtrack(combination, next_digits, phone_map, output) {
        if (next_digits.length === 0) { // 모든 숫자가 처리된 경우
            output.push(combination); // 현재 조합을 결과 배열에 추가합니다.
        } else {
            const letters = phone_map[next_digits[0] - '2']; // 다음 숫자에 해당하는 문자열을 가져옵니다.
            for (const letter of letters) { // 해당 문자열의 각 문자에 대해 반복합니다.
                backtrack(combination + letter, next_digits.slice(1), phone_map, output); // 다음 숫자로 넘어가며 조합을 찾습니다.
            }
        }
    }
};