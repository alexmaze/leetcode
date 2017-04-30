/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) {
    return 0
  }
  let ret = 0
  let map = Object.create(null)
  let rmap = Object.create(null)

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    map[num]--
    const k1 = num - k
    const k2 = num + k
    if (map[k1] && !rmap[k1 + num]) {
      ret++
      rmap[k1 + num] = true
    }
    if (map[k2] && !rmap[k2 + num]) {
      ret++
      rmap[k2 + num] = true
    }
  }
  console.log(ret)
  return ret
}

module.exports = findPairs
