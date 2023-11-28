/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // 새로운 간격의 시작과 끝을 추출
  let [start, end] = newInterval;
  // 새로운 간격을 병합한 왼쪽과 오른쪽 간격을 담을 배열
  let left = [];
  let right = [];

  // 기존 간격들을 순회
  for (const interval of intervals) {
    // 현재 간격의 시작과 끝을 추출
    const [first, last] = interval;

    // 현재 간격이 새로운 간격의 왼쪽에 있는 경우
    if (last < start) {
      left.push(interval);
    }
    // 현재 간격이 새로운 간격의 오른쪽에 있는 경우
    else if (first > end) {
      right.push(interval);
    }
    // 겹치는 부분이 있는 경우
    else {
      // 겹치는 부분의 시작은 두 간격의 시작 중 작은 값
      start = Math.min(start, first);
      // 겹치는 부분의 끝은 두 간격의 끝 중 큰 값
      end = Math.max(end, last);
    }
  }

  // 왼쪽, 새로운 간격, 오른쪽 순서로 병합된 간격들을 반환
  return [...left, [start, end], ...right];
};
