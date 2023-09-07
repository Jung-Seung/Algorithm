/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    return s.split('').reduce((acc, cur, idx, arr) => {
        let evenOffset = 0;
        let oddOffset = 0;
        while(evenOffset <= idx && idx + 1 + evenOffset < arr.length && 
              arr[idx - evenOffset] === arr[idx + 1 + evenOffset]){
            evenOffset++;
        }
        
        while(oddOffset < idx && idx + 1 + oddOffset < arr.length && 
              arr[idx - 1 - oddOffset] === arr[idx + 1 + oddOffset]){
            oddOffset++;
        }

        const evenLength = evenOffset * 2;
        const oddLength = oddOffset ? oddOffset * 2 + 1 : 1;
        if(acc.length > evenLength && acc.length > oddLength){
            return acc;
        }
        else if(evenLength > oddLength){
            return s.substr(idx - evenOffset + 1, evenLength);
        }else{
            return s.substr(idx - oddOffset, oddLength);
        }
    },'')
};