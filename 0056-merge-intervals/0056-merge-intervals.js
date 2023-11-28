/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ans = []; // 병합된 구간을 담을 배열을 초기화합니다.
    intervals.sort((a, b) => a[0] - b[0]); // 구간을 시작 값에 따라 오름차순으로 정렬합니다.

    if (intervals.length === 0) { // 구간이 없을 경우 빈 배열을 반환합니다.
        return ans;
    }

    let temp = intervals[0]; // 현재 구간을 임시로 저장할 변수를 초기화합니다.
    for (let i = 0; i < intervals.length; i++) { // 구간들을 순회합니다.
        if (intervals[i][0] <= temp[1]) { // 현재 구간의 시작 값이 이전 구간의 끝 값보다 작거나 같으면
            temp[1] = Math.max(temp[1], intervals[i][1]); // 이전 구간의 끝 값과 현재 구간의 끝 값 중 큰 값을 선택하여 갱신합니다.
        } else { // 현재 구간의 시작 값이 이전 구간의 끝 값보다 크면
            ans.push(temp); // 이전 구간을 결과 배열에 추가합니다.
            temp = intervals[i]; // 현재 구간을 다음 구간으로 설정합니다.
        }
    }
    ans.push(temp); // 마지막 구간을 결과 배열에 추가합니다.

    return ans; // 병합된 구간들을 반환합니다.
};
