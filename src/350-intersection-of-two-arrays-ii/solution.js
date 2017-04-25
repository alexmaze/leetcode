
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var ret = []

  var map = Object.create(null)
  for (var v of nums1) {
    map[v] = map[v] ? map[v] + 1 : 1
  }
  for (var v2 of nums2) {
    if (map[v2]) {
      map[v2]--
      ret.push(v2)
    }
  }
  return ret
}

module.exports = intersect
