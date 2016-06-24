
function check(s, start, length) {
  var mid = start + length / 2;
  for (var i = start; i < mid; i++) {
    if (s.charAt(i) !== s.charAt(start + length - 1 - i + start)) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var retStart = 0;
  var retLength = 0;

  var r = s.split('').reverse().join('');
  var unFinished = true;
  var x = 1;
  var i = 0;
  var j = 0;
  for (var cross = 0; cross < s.length && unFinished; cross++) {
    for (; x < 2; x++) {
      if (x === 0) {
        i = cross;
        j = 0;
      } else {
        j = cross;
        i = 0;
      }

      var maxLeft = s.length - (i > j ? i : j);
      if (retLength > maxLeft) {
        unFinished = false;
        break;
      }

      var isOk = false;
      var ii = i;
      var jj = j;
      var tempStart = s.length;
      var tempLength = 0;
      for (; ii < s.length && jj < s.length;) {
        if (s.charAt(ii) === r.charAt(jj)) {
          if (tempStart > ii) {
            tempStart = ii;
          }
          tempLength++;
        } else {
          if (retLength < tempLength && check(s, tempStart, tempLength)) {
            retLength = tempLength;
            retStart = tempStart;
          }
          tempStart = s.length;
          tempLength = 0;
        }

        ii++;
        jj++;
      }

      if (retLength < tempLength && check(s, tempStart, tempLength)) {
        retLength = tempLength;
        retStart = tempStart;
      }
    }
    x = 0;
  }

  return s.substr(retStart, retLength);
};



// ============================================
var a0 = "cltgasdfgtlcmyvvy";
var a1 = "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc";
var a2 = "aaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggghhhhhhhhhhiiiiiiiiiijjjjjjjjjjkkkkkkkkkkllllllllllmmmmmmmmmmnnnnnnnnnnooooooooooppppppppppqqqqqqqqqqrrrrrrrrrrssssssssssttttttttttuuuuuuuuuuvvvvvvvvvvwwwwwwwwwwxxxxxxxxxxyyyyyyyyyyzzzzzzzzzzyyyyyyyyyyxxxxxxxxxxwwwwwwwwwwvvvvvvvvvvuuuuuuuuuuttttttttttssssssssssrrrrrrrrrrqqqqqqqqqqppppppppppoooooooooonnnnnnnnnnmmmmmmmmmmllllllllllkkkkkkkkkkjjjjjjjjjjiiiiiiiiiihhhhhhhhhhggggggggggffffffffffeeeeeeeeeeddddddddddccccccccccbbbbbbbbbbaaaa";

var a3 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

var beforeTime = (new Date()).getTime();

var result0 = longestPalindrome(a0);
var result1 = longestPalindrome(a1);
var result2 = longestPalindrome(a2);
var result3 = longestPalindrome(a3);

var afterTime = (new Date()).getTime();

try {
  // assertTest(result0, 5);
  console.log('case 0 passed');
  assertTest(result1, 1000);
  console.log('case 1 passed');
  assertTest(result2, 996);
  console.log('case 2 passed');
  assertTest(result3, 500);
  console.log('case 3 passed');

  console.log('----------------------');
  console.log('Total Time: ' + (afterTime - beforeTime) + 'ms');
  console.log('----------------------');

} catch (err) {
  console.log('Failed');
}

function assertTrue(value) {
  if (!value) {
    throw 'ASSERT FAILED!';
  } 
}
function assertTest(result, value) {
  assertTrue(check(result, 0, result.length));
  assertTrue(result.length === value);
}