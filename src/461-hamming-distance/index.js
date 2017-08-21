/**
 * @id: 461
 * @title: Hamming Distance
 * @url: https://leetcode.com/problems/hamming-distance/#/description
 *
 * @by: Alex Yan <yanhao1991@gmail.com>
 * @date: 2017-07-31
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let ret = 0

  while (x !== 0 || y !== 0) {
    if (x !== 0 && y !== 0) {
      const lx = x % 2
      x = x >> 1
      const ly = y % 2
      y = y >> 1
      if (lx !== ly) {
        ret++
      }
    } else if (y !== 0) {
      const ly = y % 2
      y = y >> 1
      if (ly !== 0) {
        ret++
      }
    } else if (x !== 0) {
      const lx = x % 2
      x = x >> 1
      if (lx !== 0) {
        ret++
      }
    }
  }

  return ret
}

console.log(hammingDistance(3, 1))
