/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 일련의 문자열을 받아 애너그램 단위로 그룹화하는 함수
var groupAnagrams = function(strs) {
    let map = {};  // 애너그램을 그룹화할 객체
    // 문자열 배열을 순회하며 애너그램 그룹화
    for(let str of strs){
        // 문자열을 정렬하여 애너그램을 동일한 키로 만듦
        let s = str.split('').sort().join('');
        // 해당 키가 없으면 빈 배열로 초기화
        if(!map[s]) map[s] = [];
        // 애너그램 그룹에 현재 문자열 추가
        map[s].push(str);
    }
    // 애너그램 단위로 그룹화된 배열 반환
    return Object.values(map);
};
