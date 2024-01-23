/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    // 전체 그레이 코드의 수는 2^n입니다.
    const codeCount = 1 << n;
    
    // 결과 배열 초기화
    let result = [];
    
    // 0부터 시작하여 각 반복에서 한 비트씩 토글하며 그레이 코드를 생성합니다.
    // 토글 마스크: ( i >> 1 )
    for(let i = 0 ; i < codeCount ; i++){
        // 현재 인덱스 i와 오른쪽으로 1 비트 이동한 i의 XOR 연산을 통해 그레이 코드 생성
        const code = i ^ (i >> 1);
        // 결과 배열에 추가
        result.push(code);
    }
    
    return result;
};