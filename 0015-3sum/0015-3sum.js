/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = []; // 결과 세 개의 숫자 쌍을 저장하는 배열
    let sortedNums = nums.sort((a,b) => a-b); // 입력 배열을 오름차순으로 정렬합니다.
    for (let i = 0; i < sortedNums.length - 1; i++) { // 정렬된 배열을 반복하여 검사합니다.
        if (i !== 0 && sortedNums[i] === sortedNums[i - 1]) { // 중복된 요소는 건너뜁니다.
            continue;
        }
        let num1 = sortedNums[i]; // 삼중항에서 첫 번째 숫자
        let map = new Map(); // 보수값을 저장하기 위한 맵
        let target1 = num1 * (-1); // 보수 쌍을 찾기 위한 목표값
        for (let j = i + 1; j < sortedNums.length; j++) { // 나머지 요소들을 반복하여 검사합니다.
            let num2 = sortedNums[j]; // 삼중항에서 두 번째 숫자
            let k = map.get(target1 - num2); // 맵에서 보수가 있는지 확인합니다.
            if (sortedNums[j] === sortedNums[j + 1]) { // 중복된 요소는 건너뜁니다.
                map.set(num2, j);
                continue;
            }
            if ((k !== undefined) && (i !== j) && (j !== k) && (k !== i)) { // 유효한 삼중항을 확인합니다.
                result.push([num1, num2, sortedNums[k]]); // 유효한 삼중항을 결과 배열에 추가합니다.
            }
            map.set(num2, j); // 현재 숫자로 맵을 업데이트합니다.
        }
    }
    return result; // 세 개의 숫자 쌍으로 이루어진 배열을 반환합니다.
};