/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  const totalLength = a.length > b.length ? a.length : b.length
  const result = []
  let up = false
  for (let i = 0; i < totalLength; i++) {
    const ai = i < a.length ? a[a.length - i - 1] : "0"
    const bi = i < b.length ? b[b.length - i - 1] : "0"

    if (up) {
      if (ai !== "0" && bi !== "0") {
        result.push("1")
      } else if (ai !== "1" && bi !== "1") {
        up = false
        result.push("1")
      } else {
        result.push("0")
      }
    } else {
      if (ai !== "0" && bi !== "0") {
        result.push("0")
        up = true
      } else if (ai !== "1" && bi !== "1") {
        result.push("0")
      } else {
        result.push("1")
      }
    }
  }

  if (up) {
    result.push("1")
  }
  return result.reverse().join("")
}

console.log(addBinary("1010", "1011"))
// console.log(addBinary("110", "1"))
