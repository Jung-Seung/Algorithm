/**
 * @param {number[][]} grid
 * @return {number}
 */

// 그리드의 왼쪽 상단에서 오른쪽 하단으로 이동하는 경로 중 합이 최소가 되는 합을 계산하는 함수입니다.
var minPathSum = function(grid) {
    // 그리드의 크기를 가져와서 각 셀의 최소 비용을 저장할 배열을 생성합니다.
    const minGrid = grid.map(row => row.map(_ => Infinity));
    const m = grid.length - 1;
    const n = grid[0].length - 1;

    // 특정 셀에서부터 오른쪽 또는 아래로 이동하여 도달할 수 있는 최소 합을 계산하는 재귀 함수입니다.
    function getMin(x, y) {
        let right = Infinity;
        let down = Infinity;

        // 목적지에 도달한 경우 현재 셀의 비용을 반환합니다.
        if (x === m && y === n) {
            return grid[x][y];
        }

        // 이미 계산한 결과가 있다면 해당 결과를 반환합니다.
        if (minGrid[x][y] !== Infinity) {
            return minGrid[x][y];
        }

        // 오른쪽으로 이동할 수 있는 경우 최소 합을 계산합니다.
        if (x !== m) {
            right = getMin(x + 1, y);
        }

        // 아래로 이동할 수 있는 경우 최소 합을 계산합니다.
        if (y !== n) {
            down = getMin(x, y + 1);
        }

        // 현재 셀의 최소 비용을 저장하고 반환합니다.
        minGrid[x][y] = Math.min(right, down) + grid[x][y];
        return minGrid[x][y];
    }

    // 시작 지점인 왼쪽 상단 셀에서부터 최소 합을 계산하여 반환합니다.
    return getMin(0, 0);
};
