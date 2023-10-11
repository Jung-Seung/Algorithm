/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    function backtrack(remaining, currentCombo, start) {
        if (remaining === 0) {
            result.push([...currentCombo]);
            return;
        }
        
        if (remaining < 0) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            currentCombo.push(candidates[i]);
            backtrack(remaining - candidates[i], currentCombo, i);
            currentCombo.pop();
        }
    }
    
    backtrack(target, [], 0);
    
    return result;
};