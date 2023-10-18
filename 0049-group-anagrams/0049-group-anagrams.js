/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*
    1. map이라는 새로운 Map 객체를 생성합니다.
    2. 주어진 문자열 배열 strs를 반복문으로 순회합니다.
    3. 각 문자열을 배열로 만든 후 정렬하여 다시 문자열로 조합한 sortedStr을 생성합니다.
    이를 통해 애너그램을 구별할 수 있습니다.
    4. map에 sortedStr을 키로 사용하여 해당 키가 존재하지 않는 경우,
    새로운 키와 해당 문자열을 배열로 가진 값으로 맵에 추가합니다.
    5. 만약 이미 sortedStr 키가 존재하는 경우 해당 배열에 문자열을 추가합니다.
    6. 최종적으로 맵의 값들을 배열로 변환하여 반환합니다.
*/
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, [str]);
        } else {
            map.get(sortedStr).push(str);
        }
    }
    return Array.from(map.values());
};
