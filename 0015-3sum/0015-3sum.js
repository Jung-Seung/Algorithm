/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    let sortedNums = nums.sort((a,b) => a-b);
    for (let i=0; i<sortedNums.length - 1; i++){
        // 처음으로 고르는 숫자전에 같은 숫자가 있으면 중복
        if(i !==0 && sortedNums[i] === sortedNums[i-1]){
            continue;
        }
        // 숫자 하나를 고르면 두 수의 합 문제
        let num1 = sortedNums[i];
        let map = new Map();
        let target1 = num1 * (-1);
        for (let j=i+1; j<sortedNums.length; j++){
            let num2 = sortedNums[j];
            let k = map.get(target1 - num2);
             // 두 번째로 고르는 숫자 이후에 같은 숫자가 있으면 중복
            if(sortedNums[j] === sortedNums[j+1]){
                map.set(num2, j);
                continue;
            }
            if ((k !== undefined) && (i !== j) && (j !== k) && (k !== i)){
                result.push([num1, num2, sortedNums[k]]); 
            }
            map.set(num2, j);
        }
    }
    return result;
};