/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort((a, b) => a - b);
    const output = [];
    const hashmap = new Map();

    const backtracking = (curr, remaining, target) => {
        if (target < remaining[0] || !remaining.length) return;
        const checkedHashmap = new Map();

        for (let i = 0; i < remaining.length; i++) {
            const number = remaining[i];
            if (checkedHashmap.has(number)) continue;
            if (number > target) return;

            const newRemaining = [...remaining];
            const newCurr = [...curr];
            newCurr.push(number);
            newRemaining.splice(i, 1);

            if (target - number === 0) {
                const key = newCurr.sort((a, b) => a - b).toString();
                if (hashmap.has(key)) return;
                hashmap.set(key, 1);
                return output.push(newCurr);
            }

            checkedHashmap.set(number, 1);
            backtracking(newCurr, newRemaining, target - number);
        }
    }

    backtracking([], candidates, target);

    return output;
};