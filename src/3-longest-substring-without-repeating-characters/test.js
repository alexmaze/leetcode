// Given a string, find the length of the longest substring without repeating characters.
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = require('./index.js');

var case1 = {
    input: 'abcabcbb',
    output: 3
}
var case2 = {
    input: 'bbbbb',
    output: 1
}
var case3 = {
    input: 'pwwkew',
    output: 3
}

var ret1 = lengthOfLongestSubstring(case1.input);
var ret2 = lengthOfLongestSubstring(case2.input);
var ret3 = lengthOfLongestSubstring(case3.input);

console.log(ret1, ret2, ret3);