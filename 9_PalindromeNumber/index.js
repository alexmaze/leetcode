/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  if (x < 100) {
    return (x / (x % 10) === 11);
  }

  var scale = 1;
  while (x / scale >= 10) {
    scale *= 10;
  }

  while (x !== 0) {
    var left = Math.floor(x / scale);
    var right = x % 10;

    if (left != right)
      return false;

    x = Math.floor((x % scale) / 10);
    scale /= 100;
  }

  return true;
};

module.exports = isPalindrome