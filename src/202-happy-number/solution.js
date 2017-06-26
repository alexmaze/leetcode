/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n < 10) {
    if (n === 1 || n === 7) {
      return true
    } else {
      return false
    }
  }
  return isHappy(transformAndCalculate(n))
}

/**
 * @param {number} n
 * @return {number}
 */
function transformAndCalculate(n) {
  let ret = 0
  while (n >= 10) {
    let shang = Math.floor(n / 10)
    let left = n % 10
    ret += left * left
    n = shang
  }
  ret += n * n
  return ret
}

module.exports = isHappy
