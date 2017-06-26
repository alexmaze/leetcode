/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const ret = []
  const threeS = "Fizz"
  const fiveS = "Buzz"
  const threeFiveS = "FizzBuzz"
  for (let i = 1; i <= n; i++) {
    const mod3 = i % 3
    const mod5 = i % 5

    if (mod3 !== 0 && mod5 !== 0) {
      ret.push(i + "")
      continue
    }
    if (mod3 !== 0) {
      ret.push(fiveS)
      continue
    }
    if (mod5 !== 0) {
      ret.push(threeS)
      continue
    }
    ret.push(threeFiveS)
  }
  return ret
}

module.exports = fizzBuzz
