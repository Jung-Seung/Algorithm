/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    // 두 문자열 중 한 쪽이라도 다 탐색할 때까지 진행
    while (i >= 0 || j >= 0) {
        let sum = carry;
        if (i >= 0) sum += parseInt(a[i--]);
        if (j >= 0) sum += parseInt(b[j--]);
        
        // sum이 2보다 작으면 sum을 결과에 추가하고 carry는 0
        // sum이 2라면 0을 결과에 추가하고 carry는 1
        // sum이 3이라면 1을 결과에 추가하고 carry는 1
        result = (sum % 2) + result;
        carry = sum >= 2 ? 1 : 0;
    }
    
    // 마지막으로 carry가 1인 경우 1을 결과에 추가해줌
    if (carry) result = '1' + result;
    
    return result;
}