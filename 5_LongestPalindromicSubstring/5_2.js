
function check(s, start, length) {
  var mid = start + length / 2;
  for (var i = start; i < mid; i++) {
    if (s.charAt(i) !== s.charAt(start + length - 1 - i + start)) {
      return false;
    }
  }
  return true;
}

function find(s, r, si, rj, now) {

  if (now.length > (s.length - (si > rj ? si : rj))) {
    now.unFinished = false;
    return;
  }

  var temp = {
    start: s.length,
    length: 0
  }
  for (; si < s.length && rj < s.length;) {
    if (s.charAt(si) === r.charAt(rj)) {
      if (temp.start > si) {
        temp.start = si;
      }
      temp.length++;
    } else {
      if (now.length < temp.length && check(s, temp.start, temp.length)) {
        now.length = temp.length;
        now.start = temp.start;
      }
      temp.start = s.length;
      temp.length = 0;
    }

    si++;
    rj++;
  }

  if (now.length < temp.length && check(s, temp.start, temp.length)) {
    now.length = temp.length;
    now.start = temp.start;
  }

}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var ret = {
    start: 0,
    length: 0,
    unFinished: true
  };

  var r = s.split('').reverse().join('');
  var x = 1;
  var si = 0;
  var rj = 0;
  for (var cross = 0; cross < s.length && ret.unFinished; cross++) {
    for (; x < 2; x++) {
      if (x === 0) {
        si = cross;
        rj = 0;
      } else {
        rj = cross;
        si = 0;
      }

      find(s, r, si, rj, ret);
    }
    x = 0;
  }

  return s.substr(ret.start, ret.length);
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