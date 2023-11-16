/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // 주어진 숫자가 없으면 빈 배열 반환
    if (digits.length === 0) return [];
    // 전화번호 패드의 각 숫자에 해당하는 문자 배열
    const phone_map = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    // 결과를 저장할 배열
    const output = [];
    // 백트래킹 함수 호출
    backtrack("", digits, phone_map, output);
    // 최종 결과 반환
    return output;

    function backtrack(combination, next_digits, phone_map, output) {
        // 남은 숫자가 없으면 현재까지의 조합을 결과에 추가
        if (next_digits.length === 0) {
            output.push(combination);
        } else {
            // 현재 숫자에 해당하는 문자들을 순회하며 재귀적으로 호출
            const letters = phone_map[next_digits[0] - '2'];
            for (const letter of letters) {
                backtrack(combination + letter, next_digits.slice(1), phone_map, output);
            }
        }
    }
};
