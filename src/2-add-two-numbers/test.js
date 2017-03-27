var addTwoNumbers = require('./index.js');
var ListNode = require('./ListNode.js');

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 342
var param1 = ListNode.parseArray([5]);
// 465
var param2 = ListNode.parseArray([5]);

var result = addTwoNumbers(param1, param2);
console.log(result.toString());

