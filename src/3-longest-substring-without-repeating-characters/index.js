// Given "abcabcbb", the answer is "abc", which the length is 3.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring0 = function(s) {
    var ret = 0;
    var current = 0;
    var map = {};

    for (var i = 0; i < s.length; i++) {
        var preIndex =  map[s.charAt(i)];
        map[s.charAt(i)] = i;
        if (preIndex === undefined || (i - preIndex) > current) {
            current++;
        } else {
            ret = ret < current ? current : ret;
            current = i - preIndex;
        }
    }

    return ret < current ? current : ret;
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var ret = 0;
    var current = 0;
    var map = [];

    for (var i = 0; i < s.length; i++) {
        var preIndex =  map[s.charCodeAt(i)];
        map[s.charCodeAt(i)] = i;
        if (preIndex === undefined || (i - preIndex) > current) {
            current++;
        } else {
            ret = ret < current ? current : ret;
            current = i - preIndex;
        }
    }

    return ret < current ? current : ret;
};

module.exports = lengthOfLongestSubstring;