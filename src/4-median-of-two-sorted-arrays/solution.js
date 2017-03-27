/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var obj1 = {
    arr: nums1,
    start: 0,
    length: nums1.length
  }
  var obj2 = {
    arr: nums2,
    start: 0,
    length: nums2.length
  }

  var length = nums1.length + nums2.length
  if (length % 2 === 1) {
    return findKth(Math.floor(length / 2), obj1, obj2)
  } else {
    var rightK = length / 2
    var leftK = rightK - 1

    var right = findKth(rightK, obj1, obj2)
    var left = findKth(leftK, obj1, obj2)

    return ((right + left) / 2)
  }
}

/**
 * @description 寻找两个数组中第 K 小的数字, K 从 0 开始算
 *
 * @param {number} k
 * @param {{arr: number[]; start: number; length: number}} obj1
 * @param {{arr: number[]; start: number; length: number}} obj2
 * @returns {number}
 */
function findKth(k, obj1, obj2) {
  var hk = Math.floor(k / 2)

  // find num1[hk]
  obj1._hk_i = obj1.length - 1 < hk ? obj1.start + obj1.length - 1 : hk + obj1.start
  obj1._hk = obj1.arr[obj1._hk_i]

  // find num2[hk]
  obj2._hk_i = obj2.length - 1 < hk ? obj2.start + obj2.length - 1 : hk + obj2.start
  obj2._hk = obj2.arr[obj1._hk_i]

  if (obj1._hk === obj2._hk) {
    return obj1._hk
  }
  return findKth.apply(null, renew.apply(null, obj1._hk < obj2._hk ? [obj1, obj2] : [obj2, obj1]))
}

/**
 * @description 重新划分两个数组
 * 丢弃较小的那一部分的 k/2
 *
 * @param {{arr: number[]; start: number; length: number}} small
 * @param {{arr: number[]; start: number; length: number}} big
 * @returns {number}
 */
function renew(small, big) {
  var shrink = small._hk_i - small.start

  small.start = small._hk_i + 1
  if (shrink === small.length) {
    small.arr = big.arr
    small.start = big.start

    var give1 = Math.floor(big.length / 2)
    if (give1 === 0) {
      small.length = big.length
    } else {
      small.length = give1
      big.start += give1
    }
  }

  return shrink
}

module.exports = findMedianSortedArrays
