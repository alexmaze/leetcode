/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head == null) return null
  let pre = head
  while (pre.next != null) {
    let next = pre.next
    if (pre.val === next.val) {
      pre.next = next.next
    } else {
      pre = pre.next
    }
  }
  return head
}

module.exports = deleteDuplicates
