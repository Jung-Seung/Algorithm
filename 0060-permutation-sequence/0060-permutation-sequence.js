/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    // 팩토리얼 값을 저장할 배열
    let factorial = [1];
    // 1부터 n까지의 수를 저장할 배열
    let nums = [];
    // 결과를 저장할 변수
    let result = "";

    // 팩토리얼 사전 계산
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
        nums.push(i);
    }

    // k를 0부터 시작하도록 1 감소시킴
    k--;

    // k번째 순열 계산
    for (let i = 1; i <= n; i++) {
        // 현재 인덱스 계산
        let index = Math.floor(k / factorial[n - i]);
        // 결과에 해당하는 숫자 추가
        result += nums[index];
        // 사용된 숫자는 배열에서 제거
        nums.splice(index, 1);
        // 다음 순열을 위해 k 갱신
        k -= index * factorial[n - i];
    }

    return result;
};