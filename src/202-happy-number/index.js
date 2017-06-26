/**
 * @id: 202
 * @title: Happy Number
 * @url: https://leetcode.com/problems/happy-number/#/description
 *
 * @by: Alex Yan <yanhao1991@gmail.com>
 * @date: 2017-06-19
*/

const arg = parseInt(process.argv.splice(3)[0])
console.log(arg)

const solution = require("./solution")

console.log(solution(arg))
