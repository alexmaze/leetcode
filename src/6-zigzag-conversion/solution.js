/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const result = []
  const maxGap = (numRows << 1) - 2

  if (maxGap === 0) {
    return s
  }

  const partsNum = Math.ceil(s.length / maxGap)
  let lastPartLength = s.length % maxGap
  lastPartLength = lastPartLength === 0 ? maxGap : lastPartLength
  let rowLength
  let firstGap
  let secondGap
  let index = 0
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      rowLength = partsNum
      firstGap = secondGap = maxGap
    } else if (i === (numRows - 1)) {
      rowLength = lastPartLength >= numRows ? partsNum : partsNum - 1
      firstGap = secondGap = maxGap
    } else {
      firstGap = maxGap - (i << 1)
      secondGap = maxGap - firstGap
      if (lastPartLength <= i) {
        rowLength = (partsNum << 1) - 2
      } else if (lastPartLength <= (maxGap - i)) {
        rowLength = (partsNum << 1) - 1
      } else {
        rowLength = partsNum << 1
      }
    }
    // console.log([i, '|', firstGap, secondGap, '|', rowLength].join('\t'))
    let gap = secondGap
    let lastIndex
    for (let j = 0; j < rowLength; j++) {
      if (j === 0) {
        result[index] = s[i]
        lastIndex = i
      } else {
        lastIndex = lastIndex + gap
        result[index] = s[lastIndex]
      }
      // console.log(index, result[index], gap)
      index++
      gap = gap === firstGap ? secondGap : firstGap
    }
  }
  return result.join('')
}

module.exports = convert
