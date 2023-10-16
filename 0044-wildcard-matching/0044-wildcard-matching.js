/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sIndex = 0, pIndex = 0, match = 0, starIndex = -1;
    
    while (sIndex < s.length) {
        if (pIndex < p.length && (p[pIndex] === '?' || s[sIndex] === p[pIndex])) {
            sIndex++;
            pIndex++;
        } else if (pIndex < p.length && p[pIndex] === '*') {
            starIndex = pIndex;
            match = sIndex;
            pIndex++;
        } else if (starIndex !== -1) {
            pIndex = starIndex + 1;
            match++;
            sIndex = match;
        } else {
            return false;
        }
    }
    
    while (pIndex < p.length && p[pIndex] === '*') {
        pIndex++;
    }
    
    return pIndex === p.length;
};