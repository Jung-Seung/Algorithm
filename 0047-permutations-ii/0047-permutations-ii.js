/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = [];
    const countMap = {};

    for (let i = 0; i < nums.length; i++) {
        const curVal = nums[i];

        if (!countMap[curVal]) {
            countMap[curVal] = 1;
        } else {
            countMap[curVal] += 1;
        }
    } 

    dfs(nums, [], countMap, res);
    return res;
};

function dfs(nums, path, countMap, res) {
    if (path.length === nums.length) {
        return res.push([...path]);
    }

    for (const num in countMap) {
        const numCount = countMap[num];
        
        if (numCount === 0) continue;

        path.push(num);
        countMap[num] -= 1;

        dfs(nums, path, countMap, res);

        path.pop();
        countMap[num] += 1;
    }
}