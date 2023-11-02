/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x; // x가 0 또는 1인 경우에는 x를 반환
    let left = 1; // left 포인터를 1로 설정
    let right = Math.floor(x / 2); // right 포인터를 x의 절반으로 설정

    while (left <= right) { // 이진 탐색
        let mid = Math.floor((left + right) / 2); // 중간값 설정
        if (mid * mid === x) return mid; // mid의 제곱이 x와 같으면 mid 반환
        else if (mid * mid < x) left = mid + 1; // mid의 제곱이 x보다 작으면 left 업데이트
        else right = mid - 1; // mid의 제곱이 x보다 크면 right 업데이트
    }
    return right; // 최종적으로 right 반환
};
