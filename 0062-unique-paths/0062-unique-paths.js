/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 그리드의 왼쪽 상단 모서리에서 오른쪽 하단 모서리까지의 고유한 경로 수를 계산하는 함수입니다.
var uniquePaths = function(m, n) {
    // 계산된 결과를 저장할 메모이제이션 테이블을 생성합니다.
    let memo = new Array(m).fill(null).map(() => new Array(n).fill(-1));
    
    // 고유한 경로를 계산하기 위해 재귀 함수를 호출합니다.
    return uniquePathsRecursive(0, 0, m, n, memo);
};

// 고유한 경로의 수를 계산하기 위한 재귀 도우미 함수입니다.
var uniquePathsRecursive = function(x, y, m, n, memo) {
    // 목적지에 도달한 경우 (오른쪽 하단 모서리), 1을 반환합니다.
    if (x === m - 1 && y === n - 1) {
        return 1;
    }
    
    // 이미 이 셀에 대한 결과를 계산했다면 메모 테이블에서 반환합니다.
    if (memo[x][y] !== -1) {
        return memo[x][y];
    }
    
    // 오른쪽과 아래로 이동하여 고유한 경로 수를 계산합니다.
    let rightPaths = 0;
    let downPaths = 0;
    
    // 오른쪽으로 이동할 수 있는지 확인합니다.
    if (x < m - 1) {
        rightPaths = uniquePathsRecursive(x + 1, y, m, n, memo);
    }
    
    // 아래로 이동할 수 있는지 확인합니다.
    if (y < n - 1) {
        downPaths = uniquePathsRecursive(x, y + 1, m, n, memo);
    }
    
    // 계산된 결과를 메모 테이블에 저장하고 반환합니다.
    memo[x][y] = rightPaths + downPaths;
    return memo[x][y];
};
