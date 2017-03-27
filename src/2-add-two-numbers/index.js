var ListNode = require('./ListNode.js');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var p1 = l1;
    var p2 = l2;

    var ret;
    var now;

    var extra = 0;
    for (; p1 !== null || p2 !== null || extra !== 0;) {

        var val = (p1 ? p1.val : 0) + (p2 ? p2.val : 0) + extra;
        var exceed = val > 9;
        extra = exceed ? 1 : 0;
        val = exceed ? val - 10 : val;

        if (ret !== undefined) {
            now.next = new ListNode(val);
            now = now.next
        } else {
            ret = new ListNode(val);
            now = ret;
        }
        
        p1 = p1 !== null ? p1.next : null;
        p2 = p2 !== null ? p2.next : null;
    }
    
    return ret;
};

module.exports = addTwoNumbers;