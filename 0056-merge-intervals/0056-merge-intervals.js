/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 만약 intervals가 비어있다면 빈 배열을 반환합니다.
    if (intervals.length === 0) return [];
    
    // 배열을 시작값을 기준으로 정렬합니다.
    intervals.sort((a, b) => a[0] - b[0]);
    
    // 결과 배열을 생성하고 첫 번째 간격을 추가합니다.
    const result = [intervals[0]];
    
    // 각 간격을 순회하며 겹치는 부분을 병합합니다.
    for (let i = 1; i < intervals.length; i++) {
        // 현재 간격과 이전 간격을 비교하여 겹치는 부분이 있다면 병합합니다.
        if (intervals[i][0] <= result[result.length - 1][1]) {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1]);
        } else {
            // 겹치지 않는다면 새로운 간격으로 추가합니다.
            result.push(intervals[i]);
        }
    }
    
    // 최종 결과 배열을 반환합니다.
    return result;
};