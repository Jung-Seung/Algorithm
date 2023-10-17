/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {

    const size = nums.length;

    // destination is last index
    let destination = size-1;

    let curCoverage = 0, lastJumpIdx = 0;

    // counter of jump
    let timesOfJump = 0;

    // Quick response if start index == destination index == 0
    if( size == 1 ){
        return 0;
    }


    // Greedy stragegy: extend coverage as long as possible with lazp jump
    for( let i = 0 ; i < size ; i++){

        // extend coverage
        curCoverage = Math.max(curCoverage, i + nums[i] );

        // forced to jump (by lazy jump) to extend coverage
        if( i == lastJumpIdx ){

            lastJumpIdx = curCoverage;

            timesOfJump++;

            // check if we reached destination already
            if( curCoverage >= destination){
                return timesOfJump;
            }
        }
    }

    return timesOfJump;
    

};
