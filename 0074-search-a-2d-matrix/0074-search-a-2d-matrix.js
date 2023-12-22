/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 행렬이 비어 있는지 확인
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    const m = matrix.length; // 행의 개수
    const n = matrix[0].length; // 열의 개수

    let left = 0; // 이진 검색의 왼쪽 경계
    let right = m * n - 1; // 이진 검색의 오른쪽 경계

    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 중간 인덱스 계산
        const midElement = matrix[Math.floor(mid / n)][mid % n]; // 중간 요소 가져오기

        if (midElement === target) {
            // 중간 요소가 타겟과 같으면 타겟을 찾았습니다.
            return true;
        } else if (midElement < target) {
            // 중간 요소가 타겟보다 작으면 오른쪽 반에서 검색
            left = mid + 1;
        } else {
            // 중간 요소가 타겟보다 크면 왼쪽 반에서 검색
            right = mid - 1;
        }
    }
    // 행렬에서 타겟을 찾지 못했습니다.
    return false;
};