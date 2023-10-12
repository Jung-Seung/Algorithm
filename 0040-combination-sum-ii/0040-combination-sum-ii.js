/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    const used = Array(candidates.length).fill(false);
    
    candidates.sort((a, b) => a - b); // candidates 배열을 정렬합니다.
    
    function backtrack(remaining, currentCombo, start) {
        if (remaining === 0) {
            result.push([...currentCombo]);
            return;
        }
        
        if (remaining < 0) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1] && !used[i - 1]) {
                continue; // 중복된 숫자를 건너뜁니다.
            }
            currentCombo.push(candidates[i]);
            used[i] = true;
            backtrack(remaining - candidates[i], currentCombo, i + 1);
            currentCombo.pop();
            used[i] = false;
        }
    }
    
    backtrack(target, [], 0);
    
    return result;
};