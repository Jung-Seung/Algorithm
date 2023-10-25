/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;

    // newInterval이 현재 간격과 겹치지 않는 부분까지 result에 추가합니다.
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // newInterval이 현재 간격과 겹치는 부분을 병합합니다.
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    // 나머지 간격들을 result에 추가합니다.
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};