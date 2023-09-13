/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let start = 0;
    let last = height.length - 1;
    
    while (last - start > 0) {
        const standard = height[last] > height[start] ? height[start] : height[last];
        const gap = (last - start) * standard;
              
        height[last] > height[start] ? start++ : last--;
        max = max < gap ? gap : max;
    }
    return max;
};