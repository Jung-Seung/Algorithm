/**
 * @param {string} s
 * @return {string}
 */
var check = function(s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

var longestPalindrome = function(s) {
    return s.split('').reduce((acc, cur, idx, arr) => {
        let evenOffset = 0; // 짝수 길이 팰린드롬 검사를 위한 오프셋
        let oddOffset = 0; // 홀수 길이 팰린드롬 검사를 위한 오프셋
        
        // 현재 문자를 중심으로 하는 짝수 길이 팰린드롬 검사
        while(evenOffset <= idx && idx + 1 + evenOffset < arr.length && 
              arr[idx - evenOffset] === arr[idx + 1 + evenOffset]){
            evenOffset++;
        }
        
        // 현재 문자를 중심으로 하는 홀수 길이 팰린드롬 검사
        while(oddOffset < idx && idx + 1 + oddOffset < arr.length && 
              arr[idx - 1 - oddOffset] === arr[idx + 1 + oddOffset]){
            oddOffset++;
        }

        // 짝수 길이와 홀수 길이 팰린드롬의 길이 계산
        const evenLength = evenOffset * 2;
        const oddLength = oddOffset ? oddOffset * 2 + 1 : 1;
        
        // 현재까지의 최장 팰린드롬과 비교하여 최장 팰린드롬 갱신
        if(acc.length > evenLength && acc.length > oddLength){
            return acc; // 현재까지의 최장 팰린드롬이 더 긴 경우, 그대로 반환
        }
        else if(evenLength > oddLength){
            return s.substr(idx - evenOffset + 1, evenLength); // 짝수 길이 팰린드롬이 더 긴 경우, 해당 부분 문자열 반환
        }else{
            return s.substr(idx - oddOffset, oddLength); // 홀수 길이 팰린드롬이 더 긴 경우, 해당 부분 문자열 반환
        }
    },''); // 초기값으로 빈 문자열을 사용하여 reduce 시작
}