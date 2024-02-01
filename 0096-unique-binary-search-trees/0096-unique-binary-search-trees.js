/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 'sol' 배열을 생성하여 솔루션을 저장합니다. 초기값은 n=0, n=1인 경우입니다.
    var sol = [1, 1];
    // 2부터 n까지의 루프를 실행합니다.
    for (let i = 2; i <= n; i++) {
        sol[i] = 0;

        // 위의 루프 내에서 1부터 i까지의 루프를 실행합니다.
        for (let j = 1; j <= i; j++) {
            // 'sol' 배열의 i번째 위치를 업데이트하며 해당 인덱스의 곱을 더합니다.
            sol[i] += sol[i - j] * sol[j - 1];
        }
    }
    // 'sol' 배열의 n번째 인덱스 값을 반환하여 해를 얻습니다.
    return sol[n];
};