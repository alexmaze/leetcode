/**
 * @id: 561
 * @title: Array Partition I
 * @url: https://leetcode.com/problems/array-partition-i/#/description
 *
 * @by: Alex Yan <yanhao1991@gmail.com>
 * @date: 2017-07-24
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b)
  let ret = 0
  for (let i = 0; i < nums.length; i++) {
    ret += nums[i]
    i++
  }
  return ret
}
