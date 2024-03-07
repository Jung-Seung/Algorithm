/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0; // 최대 면적을 저장할 변수
    let start = 0; // 시작 인덱스
    let last = height.length - 1; // 마지막 인덱스
    // 시작 인덱스와 마지막 인덱스가 만나기 전까지 반복
    while (last - start > 0) {
        // 현재 위치에서 얻을 수 있는 물의 높이 (두 포인터 중 더 낮은 높이를 기준으로 함)
        const standard = height[last] > height[start] ? height[start] : height[last];
        // 현재 위치에서 얻을 수 있는 물의 양 (가로 길이 * 높이)
        const gap = (last - start) * standard;
        // 높이가 더 낮은 쪽의 포인터를 이동시킴
        height[last] > height[start] ? start++ : last--;
        // 최대 면적 갱신
        max = max < gap ? gap : max;
    }
    return max; // 최대 면적 반환
};