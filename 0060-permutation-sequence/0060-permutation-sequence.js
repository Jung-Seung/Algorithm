/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    // 각 숫자의 팩토리얼 값을 미리 계산하여 저장
    let factorial = [1];
    for (let i = 1; i <= n; i++) factorial[i] = i * factorial[i - 1];

    // 1부터 n까지의 숫자 배열 생성
    let nums = Array.from({ length: n }, (v, i) => i + 1);
    let res = "";

    // 큰 수부터 작은 수 순으로 순열을 구성
    for (let i = n; i > 0; i--) {
        // 현재 자리에 들어갈 숫자의 인덱스 계산
        let index = Math.ceil(k / factorial[i - 1]);
        // 순열에 해당 숫자 추가
        res += nums[index - 1];
        // 배열에서 해당 숫자 제거
        nums.splice(index - 1, 1);
        // 다음 순열의 순서를 계산
        k -= factorial[i - 1] * (index - 1);
    }
    return res;
};
