/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // 주어진 문자열이 행 수보다 짧거나 행 수가 2보다 작으면 원래 문자열 반환
    if(s.length <= numRows || numRows < 2) return s;

    // 주어진 문자열의 길이
    const len = s.length;
    // 주어진 행 수를 기반으로 각 문자가 위치할 행을 계산하기 위한 값
    const num = 2 * (numRows - 1);
    // 각 행의 문자들을 저장할 배열
    let res = Array(numRows).fill('');
    // 문자열을 탐색하기 위한 임시 변수
    let tmp = 0;
    // 문자열을 순회하면서 각 문자가 위치할 행을 계산하여 결과에 저장
    for(let i = 0; i<len; i++){
        // 현재 문자가 위치할 행 계산
        tmp = i % num;
        // 각 행에 문자 추가
        if(tmp < numRows){
            res[tmp] += s[i]; // 직선으로 채워지는 부분
        } else {
            res[num - tmp] += s[i]; // 대각선으로 채워지는 부분
        }
    }
    // 각 행에 저장된 문자열을 합쳐서 반환
    return res.join('');
};