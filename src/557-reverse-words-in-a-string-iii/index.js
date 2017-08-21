/**
 * @id: 557
 * @title: Reverse Words in a String III
 * @url: https://leetcode.com/problems/reverse-words-in-a-string-iii/#/description
 *
 * @by: Alex Yan <yanhao1991@gmail.com>
 * @date: 2017-07-09
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const words = s.split(" ")
  const ret = words.map(word => word.split("").reverse().join(""))
  return ret.join(" ")
}

var reverseWords_2 = function(s) {
  const ret = s.split("")
  let start = 0
  let end = 0
  for (let i = 0; i < ret.length; i++) {
    if (ret[i] !== " ") {
      end++
    } else {
      reverseWord(ret, start, end - 1)
      ret[i] = " "
      start = i + 1
      end = i + 1
    }
  }
  reverseWord(ret, start, end - 1)
  return ret.join("")
}

/**
 * revers word and fill to the array
 * @param {any[]} s
 * @param {number} start
 * @param {number} end
 */
var reverseWord = function(s, start, end) {
  const hl = (end - start) >> 1
  for (let i = 0; i <= hl; i++) {
    const temp = s[start + i]
    s[start + i] = s[end - i]
    s[end - i] = temp
  }
}

console.log(reverseWords_2("Let's take LeetCode contest"))
