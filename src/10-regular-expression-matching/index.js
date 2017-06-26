/**
 * @id: 10
 * @title: Regular Expression Matching
 * @url: https://leetcode.com/problems/regular-expression-matching/#/description
 *
 * @by: Alex Yan <yanhao1991@gmail.com>
 * @date: 2017-04-30
*/

const isMatch = require("./solution")

console.log(isMatch("aa", "a") === false)
console.log(isMatch("aa", "aa") === true)
console.log(isMatch("aaa", "aa") === false)
console.log(isMatch("aa", "a*") === true)
console.log(isMatch("aa", ".*") === true)
console.log(isMatch("ab", ".*") === true)
console.log(isMatch("aab", "c*a*b") === true)
