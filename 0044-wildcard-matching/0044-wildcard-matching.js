/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let string = 0, pattern = 0;
    let starIdx = -1, pointer = -1;

    while (string < s.length) {
        if ((pattern < p.length && s[string] === p[pattern]) || p[pattern] === "?") {
            string++;
            pattern++;
        } else if (pattern < p.length && p[pattern] === "*") {
            starIdx = pattern;
            pointer = string;
            pattern++;
        } else if (starIdx === -1) return false;
        else {
            pattern = starIdx + 1;
            string = pointer + 1;
            pointer = string;
        }
    }
    for (let idx = pattern; idx < p.length; idx++) {
        if (p[idx] !== "*") return false;
    }
    return true;
};