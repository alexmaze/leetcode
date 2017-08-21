/**
 * @id: 70
 * @title: Climbing Stairs
 * @url: https://leetcode.com/problems/climbing-stairs/#/description
 *
 * @by: Alex Yan <yanhao1991@gmail.com>
 * @date: 2017-08-14
*/

var map = Object.create(null)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 0) {
    return 1
  }
  if (map[n]) {
    return map[n]
  }
  var left = climbStairs(n - 1)
  var right = n >= 2 ? climbStairs(n - 2) : 0
  map[n] = left + right
  return map[n]
}

// console.log(climbStairs(1))
// console.log(climbStairs(2))
// console.log(climbStairs(3))
console.log(climbStairs(38))
