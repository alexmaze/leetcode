const INT_MAX = 2147483647
const INT_MIN = -2147483648

/**
 * 思路：
 * 1. 扫描字符，排除前面所有的空白符
 * 2. 第一个有效字符只能是 +-0~9，后面的只能是0~9，出错返回 0
 * 3. 顺序记录所有的有效字符直到结束或者遇到非法字符停止
 * 4. 有效字符数为0返回0
 * 5. 转换，过程中发现超出最大最小限制直接返回最大最小值
 *
 * ascii
 * 0~9  48~57
 * +-   43 45
 *
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim()
  let signPositive = true
  const nums = []
  for (let i = 0; i < str.length; i++) {
    const ic = str.charCodeAt(i)
    if (i === 0) {
      if (ic === 43) {
        signPositive = true
        continue
      } else if (ic === 45) {
        signPositive = false
        continue
      }
    }

    if (ic >= 48 && ic <= 57) {
      nums.push(ic - 48)
    } else {
      break
    }
  }

  if (nums.length === 0) {
    return 0
  }

  let ret = 0
  for (let i = 0; i < nums.length; i++) {
    ret = ret * 10 + nums[i]
    if (signPositive && ret > INT_MAX) {
      return INT_MAX
    }
    if (!signPositive && -ret < INT_MIN) {
      return INT_MIN
    }
  }

  return signPositive ? ret : -ret
}

module.exports = myAtoi
