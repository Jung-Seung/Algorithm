/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    // 전화기 버튼 객체
    const btns = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };
    let result = btns[digits[0]];
    if (digits.length === 1) return result;

    // 첫 digits로 이루어진 조합은 이미 구했으므로,
    // 주어진 digits 길이-1 만큼만 반복을 돈다. "235" => "35"
    for (let i = 1; i < digits.length; i++) {
        // 이유는 알수없으나 btns 객체가 오염되는 버그가 있어 부득이하게 재정의
        const btns = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z'],
        };
        // 추가해야할 버튼의 문자열 배열
        const chars = btns[digits[i]];
        // 문자열 4개짜리 버튼이면 4개를 추가해주어야 한다.
        const isFourChars = digits[i] === '7' || digits[i] === '9';

        // 만들어진 배열을 반복을 돌면서, 새로운 문자열을 더한 배열로 대체한다.
        for (let j = 0; j < result.length; j++) {
            const str = result[j];
            result[j] = [str + chars[0], str + chars[1], str + chars[2]];
            if (isFourChars) result[j].push(str + chars[3]);
        }

        // 2차배열을 flatten해준다.
        result = result.flat();
    }

    return result;
};